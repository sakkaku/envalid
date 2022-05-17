export interface GistDetailsOwner {
  login: string;
}

export interface GistDetailFile {
  filename: string,
  type: string,
  language: string,
  raw_url: string,
  size: number,
  truncated: boolean,
  content: string
}

export interface GistDetails {
  id: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  files: Record<string, GistDetailFile>;
  owner: GistDetailsOwner;
  comments: number;
  comments_url: string;
}