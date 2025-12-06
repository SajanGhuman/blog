import { notFound } from "next/navigation";
import { blogComponents } from "../../blogs";
import styles from "./page.module.css";

export default async function BlogPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  const Component = blogComponents[slug];

  if (!Component) return notFound();

  return (
    <div className={styles.wrapper}>
      <Component />
    </div>
  );
}
