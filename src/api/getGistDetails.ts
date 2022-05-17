import type { GistDetails } from "@/api/GistDetails";

export async function getGistDetails(id: string): Promise<GistDetails | undefined> {
  const url = 'https://api.github.com/gists/' + encodeURIComponent(id);
  const res = await fetch(url);
  if(!res.ok) return undefined;
  return res.json();
}