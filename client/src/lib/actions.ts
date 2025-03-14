"use server";

import { RequestData } from "product-feedback";
import client from "./client";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";
import { ActionState } from "@/app/login/login-form";

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
    redirect(`/feedback/${newFeedback._id}`, RedirectType.replace);
  }
}

export async function editFeedback(id: string, data: RequestData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("feathers-jwt")?.value;

  if (!accessToken) {
    const from = encodeURIComponent(`/feedback/${id}/edit`);
    redirect(`/login?from=${from}`);
  }

  const editedFeedback = await client
    .service("requests")
    .patch(id, data, { headers: { Authorization: `Bearer ${accessToken}` } });

  if (editedFeedback) {
    redirect(`/feedback/${id}`);
  }
}

export async function deleteFeedback(id: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("feathers-jwt")?.value;

  if (!accessToken) {
    const from = encodeURIComponent(`/feedback/${id}/edit`);
    redirect(`/login?from=${from}`);
  }

  await client
    .service("requests")
    .remove(id, { headers: { Authorization: `Bearer ${accessToken}` } });

  redirect("/", RedirectType.replace);
}

export async function signIn(
  from: string | undefined,
  prevState: ActionState,
  formData?: FormData
) {
  const username = formData?.get("username");
  const password = formData?.get("password");

  try {
    const result = await client.authenticate({
      strategy: "local",
      username,
      password,
    });
    console.log(result);

    const cookieStore = await cookies();
    cookieStore.set("feathers-jwt", result.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7200,
    });
  } catch (e: any) {
    console.log("Authentication error", e);
    return { message: e.message };
  }

  if (from) {
    redirect(from, RedirectType.replace);
  } else {
    redirect("/", RedirectType.replace);
  }
}
