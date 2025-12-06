import Sample from "./sample/sample";

export type BlogGridType = {
  title: string;
  slug: string;
  date?: string;
  desc: string;
};

export const blogComponents: Record<
  string,
  React.FC<{ metadata: BlogGridType }>
> = {
  sample: Sample,
};
