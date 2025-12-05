import styles from "./page.module.css";
import BlogGrid from "@/components/BlogGrid/BlogGrid";
import { blog } from "@/blogs";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainHeading}>
        <span>
          <b>BLOG</b>
        </span>
        <p>
          {blog.length < 2
            ? `${blog.length} article`
            : `${blog.length} articles`}
        </p>
      </div>
      <div className={styles.grid}>
        <BlogGrid />
      </div>
    </div>
  );
}
