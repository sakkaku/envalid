import type { GistHeaderFile } from "@/api/GistHeaderFile";

export interface GistHeader {
  url: string;
  id: string;
  description: string;
  files: Record<string, GistHeaderFile>;
  created_at: string;
  updated_at: string;
  comments: number;
  comments_url: string;
  html_url: string;
}