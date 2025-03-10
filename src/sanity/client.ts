import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w4bcbt4n",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
