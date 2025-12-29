import { BASE_URL } from "./constants";

export async function fetchCampaigns() {
  const res = await fetch(`${BASE_URL}/campaigns`);
  if (!res.ok) throw new Error("Failed to fetch campaigns");
  return res.json();
}
