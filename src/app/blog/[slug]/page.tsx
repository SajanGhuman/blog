import styles from "./page.module.css";
import Sample from "@/app/blogs/1/sample";

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  return (
    <div className={styles.wrapper}>
      <Sample />
    </div>
  );
}
