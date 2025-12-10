import styles from "./UnderstandJavascript.module.css";
import { format } from "date-fns";
import { BlogGridType } from "../index";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import Link from "next/link";

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

  let code2 = `
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(true));
console.log(typeof("hello"));
console.log(typeof(2));
console.log(typeof(undefined));
console.log(typeof(undefined));
`;

  let ans2 = `
console.log(typeof(true)); //boolean
console.log(typeof("hello")); //string
console.log(typeof(2)); //number
console.log(typeof(undefined)) //undefined;
console.log(typeof(null)); //object
`;

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
        <h1>Solution</h1>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          If you have been working for a while with JavaScript, you might not be
          surprised. But if you are totally bamboozled like I was, keep reading
          👇
        </p>
        <p>False? but how? </p>
        <p>This is how I thought about it</p>
        <CodeSnippet lang="js">{`
/* 
 we have, y = {}
 and, {} === {}
 so substituing, {} with y, we get
*/
y === {} //true`}</CodeSnippet>
        <p>but the solution says</p>
        <CodeSnippet lang="js">{`y === {} // false`}</CodeSnippet>
        <p>How does that make any sense?</p>
        <p>
          But I was wrong. There was something more going on than I had
          imagined. To understand this we first need to clear the basics and set
          a middle ground. We will circle back to this once we have that.
        </p>
        <h1>The Basics</h1>
        <p>Do me a favor and logs these values on your browser console.</p>
        <CodeSnippet lang="js">{code2}</CodeSnippet>
        <p>
          I am gonna tell you the results, but believe me, you will learn so
          much more if you do it yourself 🙂
        </p>
        <CodeSnippet lang="js">{ans2}</CodeSnippet>
        <p>"Wait, wth? null is of type object?"</p>
        <p>
          if that was what you thought, then I regret to inform you about a
          annoying{" "}
          <Link
            href="https://2ality.com/2013/10/typeof-null.html"
            target="_blank"
          >
            bug
          </Link>{" "}
          🐛 which was mistakenly added to javascript and one that unfortunately
          can’t be fixed, because it would break existing code.
        </p>
        <p>And this gives us our first insight.</p>
        <p>
          There are 7 primitive values in javascript. Just like there are the 7
          wonders, 7 seas, 7 colors of a rainbow, 7 continents and 7 days of a
          week. Of course, it had to be the damn number 7.
        </p>
        <p>
          The remaning two are BigInts and Symbols but they are rarely used.
        </p>
        <h1>Primitive Values</h1>
        <p>Aight!, So we have the following:</p>
        <ul>
          <li>
            <p>
              <b>Undefined</b> (undefined), used for unintentionally missing
              values.
            </p>
          </li>
          <li>
            <p>
              <b>Null</b> (null), used for intentionally missing values.
            </p>
          </li>
          <li>
            <p>
              <b>Booleans</b> (true and false), used for logical operations.
            </p>
          </li>
          <li>
            <p>
              <b>Numbers</b> (-100, 3.14, and others), used for math
              calculations.
            </p>
          </li>
          <li>
            <p>
              <b>BigInts</b> (uncommon and new), used for math on big numbers.
            </p>
          </li>
          <li>
            <p>
              <b>Strings</b> ("hello", "abracadabra", and others), used for
              text.
            </p>
          </li>
          <li>
            <p>
              <b>Symbols</b> (uncommon), used to perform rituals and hide
              secrets.
            </p>
          </li>
        </ul>
        {/* TODO: Add a info note here, saying that using undefined and 
        null as intentional and unintention missing value is a standardized 
        practice in community, not a rule */}

        <h1>Objects and Functions</h1>
        <ul>
          <li>
            <p>
              <b>Objects</b> ({} and others), used to group related data and
              code.
            </p>
          </li>

          <li>
            <p>
              <b>Functions</b>
              {` (x => x * 2 and others), used to refer to code.`}
            </p>
            <p>
              If you are wondering, "what about arrays and other stuff that I
              use".
            </p>
            <p>
              It's because everything else in javascript is an ✨
              <em>
                <b>object</b>
              </em>
              ✨
            </p>
            <p>
              Well, maybe not
              <a href="https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object">
                everything
              </a>
              , but almost everything
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
