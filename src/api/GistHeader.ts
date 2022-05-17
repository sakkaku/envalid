export interface GistHeaderFile {
  filename: string,
  type: string,
  language: string,
  raw_url: string,
  size: number
}

export interface GistHeader {
  id: string;
  url: string;
  description: string;
  files: Record<string, GistHeaderFile>;
  created_at: string;
  updated_at: string;
  comments: number;
  comments_url: string;
  html_url: string;
}