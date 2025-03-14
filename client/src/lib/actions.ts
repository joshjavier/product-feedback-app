"use server";

import { RequestData } from "product-feedback";
import client from "./client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createFeedback(data: RequestData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("feathers-jwt")?.value;

  let newFeedback;
  try {
    newFeedback = await client
      .service("requests")
      .create(data, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log(newFeedback);
  } catch (e) {
    throw e;
  }

  if (newFeedback) {
    redirect(`/feedback/${newFeedback._id}`);
  }
}

export async function signIn(from: string | undefined, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const result = await client.authenticate({
    strategy: "local",
    username,
    password,
  });

  const cookieStore = await cookies();
  cookieStore.set("feathers-jwt", result.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 7200,
  });

  if (from) {
    redirect(from);
  } else {
    redirect("/");
  }
}
