export interface Project {
  slug:        string;
  title:       string;
  description: string;
  tag:         string;
  tech:        string[];
  github?:     string;
  live?:       string;
  // Detail fields — used by /projects/[slug]/page.tsx
  problem?:    string;
  solution?:   string;
  learned?:    string;
  features?:   string[];
}
 