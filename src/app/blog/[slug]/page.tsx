import { notFound } from "next/navigation";
import { blogComponents } from "../../blogs";
import styles from "./page.module.css";
import { blog } from "@/blogs.js";
import { BlogGridType } from "../../blogs/index";

export default async function BlogPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Component = blogComponents[slug];
  if (!Component) return notFound();

  const metadata: BlogGridType | undefined = blog.find((b) => b.slug === slug);
  if (!metadata) return notFound();
  return (
    <div className={styles.wrapper}>
      <Component metadata={metadata} />
    </div>
  );
}
