import rest from "@feathersjs/rest-client";
import { createClient } from "product-feedback";

const connection = rest("http://localhost:3030").fetch(fetch);

const client = createClient(connection);

export default client;
