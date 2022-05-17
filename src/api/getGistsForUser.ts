import type { GistHeader } from "@/api/GistHeader";

export async function getGistsForUser(user: string, perPage: number, page: number = 1): Promise<GistHeader[]> {
  // https://docs.github.com/en/rest/gists/gists#list-gists-for-a-user
  const url = new URL('https://api.github.com/users/' + encodeURIComponent(user) + '/gists');
  url.searchParams.append('per_page', encodeURIComponent(perPage));
  url.searchParams.append('page', encodeURIComponent(page));
  const res = await fetch(url.toString());
  if(!res.ok) return [];
  return res.json();
}