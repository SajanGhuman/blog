import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import styles from "./page.module.css";

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  return (
    <div className={styles.wrapper}>
      Post : {slug}
      <CodeSnippet lang="js">print(hello World)</CodeSnippet>
    </div>
  );
}
