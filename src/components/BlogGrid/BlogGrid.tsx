import { blog } from "../../blogs.js";
import styles from "./BlogGrid.module.css";
import { ArrowRight } from "react-feather";
import Link from "next/link";

type BlogGridType = {
  title: string;
  date?: string;
  desc: string;
};
function BlogGrid() {
  {
    return blog.map(({ title, date, desc }: BlogGridType) => (
      <div key={title} className={styles.grid_item}>
        <Link href={`/blog/${title.replace(/\s/g, "-").toLowerCase()}`}>
          <div>
            <b>{title}</b>
          </div>
        </Link>
        {/* <time>{date}</time> */}
        <div>{desc}</div>
        <Link href={`/blog/${title.replace(/\s/g, "-").toLowerCase()}`}>
          Read more
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
    ));
  }
}

export default BlogGrid;
