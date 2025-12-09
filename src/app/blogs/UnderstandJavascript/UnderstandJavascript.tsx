import styles from "./UnderstandJavascript.module.css";
import { format } from "date-fns";
import { BlogGridType } from "../index";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import { Link } from "react-feather";

type Props = {
  metadata: BlogGridType;
};

export default function UnderstandingJavascript({ metadata }: Props) {
  let { title, date } = metadata;

  const files = {
    "/App.js": `
import './index.css';

export default function App() {
  return <h1>Good day!</h1>;
}
`,

    "/index.css": `
h1 {
  color: tomato;
}
`,
  };

  let code1 = `const x = "One"; 
console.log(x === "One");
const y = {};
console.log(y === {});`;

  let ans1 = `const x = "One"; 
console.log(x === "One"); //true
const y = {};
console.log(y === {}); //false`;

  return (
    <>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <time>
          Published on {date ? format(new Date(date), "MMMM do, yyyy") : ""}
        </time>
      </div>
      <div className={styles.content}>
        <p>
          Recently I took a $100 course about JavaScript called{" "}
          <a href="https://justjavascript.com/" target="_blank">
            Just-Javascript.
          </a>
        </p>
        <p>
          It is created by{" "}
          <a href="https://overreacted.io/" target="_blank">
            Dan Abramov
          </a>{" "}
          a member of the React team, and a co-author of Redux and Create React
          App.
        </p>
        <p>
          As the name suggests, <em>It's really just JavaScript</em>. But, oh
          boy does it teach you JavaScript.
        </p>
        <p>
          The course starts by completely crushing your mental model of
          JavaScript, then proceeds to explain the whys and completely change
          how you think about even the smallest aspects of JavaScript.
        </p>
        <p>Take this example for a moment:</p>
        <CodeSnippet lang="js">{code1}</CodeSnippet>
        <p>
          What do you think will be logged here? Take a moment to think about it
          and write why you think that way here to lock in your answer. Then see
          the solution to see if you were right.
        </p>
        <textarea
          placeholder="Think and Write your answer here..."
          maxLength={200}
        ></textarea>
        <p>Drumroll...🥁🥁🥁🥁🥁</p>
        <h1>Solution:</h1>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          If you have been working for a while with JavaScript, you might not be
          surprised. But if you are totally bamboozled like I was, keep reading
          👇
        </p>
        <p>False? is </p>
        <CodeSnippet lang="js">{`{} !== {}`}</CodeSnippet>
        <p>How does that make any sense?</p>
        <p>
          My first thought was that it was one of those annoying javascript{" "}
          <Link
            href="https://2ality.com/2013/10/typeof-null.html"
            target="_blank"
          >
            bugs
          </Link>
          🐛
        </p>
      </div>
    </>
  );
}
