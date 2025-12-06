import { blog } from "../../blogs.js";
import styles from "./BlogGrid.module.css";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import { format } from "date-fns";

type BlogGridType = {
  title: string;
  slug: string;
  date?: string;
  desc: string;
};

function BlogGrid() {
  {
    return blog.map(({ title, date, desc, slug }: BlogGridType) => (
      <div key={title} className={styles.grid_item}>
        <Link href={`/blog/${title.replace(/\s/g, "-").toLowerCase()}`}>
          <div>
            <b>{title}</b>
          </div>
        </Link>
        <time>{date ? format(new Date(date), "MMMM do, yyyy") : ""}</time>
        <div>{desc}</div>
        <Link href={`/blog/${slug}`}>
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
