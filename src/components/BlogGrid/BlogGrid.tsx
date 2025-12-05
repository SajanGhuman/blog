import { blog } from "../../blogs.js";
import styles from "./BlogGrid.module.css";

type BlogGridType = {
  title: string;
  shortDesc?: string;
  desc: string;
};
function BlogGrid() {
  {
    return blog.map(({ title, shortDesc, desc }: BlogGridType) => (
      <div key={title} className={styles.grid_item}>
        <div>
          <b>{title}</b>
        </div>
        <div>{shortDesc}</div>
        <div>{desc}</div>
        <p>Read more</p>
      </div>
    ));
  }
}

export default BlogGrid;
