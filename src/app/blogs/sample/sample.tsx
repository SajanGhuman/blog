import styles from "./sample.module.css";
import { format } from "date-fns";
import { BlogGridType } from "../index";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";

type Props = {
  metadata: BlogGridType;
};

export default function Sample({ metadata }: Props) {
  let { title, slug, date, desc } = metadata;
  let code1 = `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 32rem) {
    grid-template-columns: 1fr;
  }
}`;
  return (
    <>
      <div className={styles.heading}>
        <h1>This is a sample heading</h1>
        <time>
          Published on {date ? format(new Date(date), "MMMM do, yyyy") : ""}
        </time>
      </div>
      <div className={styles.content}>
        <p>
          When I was first learning to code, I remember finding the Modulo
          operator (%) extremely confusing. 😬
        </p>
        <p>
          If you don't understand what it's doing, the values it produces seem
          completely random.
        </p>
        <CodeSnippet lang="js">{code1}</CodeSnippet>
      </div>
    </>
  );
}
