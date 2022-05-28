import type { RepositoryHeader } from "@/api/RepositoryHeader";

export async function getRepositoriesForUser(user: string, perPage: number, page = 1): Promise<RepositoryHeader[]> {
  // https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
  const url = new URL("https://api.github.com/users/" + encodeURIComponent(user) + "/repos");
  url.searchParams.append("per_page", encodeURIComponent(perPage));
  url.searchParams.append("page", encodeURIComponent(page));
  const res = await fetch(url.toString());
  if (!res.ok) return [];
  return res.json();
}
