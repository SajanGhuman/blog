import styles from "./UnderstandJavascript.module.css";
import { format } from "date-fns";
import { BlogGridType } from "../index";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import Link from "next/link";
import Image from "next/image";
import Video from "@/components/Video/Video";

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

  let code1 = `let x = "One"; 
console.log(x === "One");
let y = {};
console.log(y === {});`;

  let ans1 = `let x = "One"; 
console.log(x === "One"); //true
let y = {};
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
console.log(typeof(undefined)) //undefined
console.log(typeof(null)); //object
`;
  let code3 = `
let a = 5;
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
          Recently, I took a $100 JavaScript course called{" "}
          <a href="https://justjavascript.com/" target="_blank">
            Just-JavaScript.
          </a>
        </p>
        <p>
          It was created by{" "}
          <a href="https://overreacted.io/" target="_blank">
            Dan Abramov
          </a>
          , a member of the React team and co-author of Redux and Create React
          App.
        </p>
        <p>
          As the name suggests, <em>it's really just JavaScript</em>. But oh boy
          does it teach you JavaScript✨
        </p>
        <p>
          The course starts by completely shattering your mental model of
          JavaScript, then slowly rebuilds it by explaining the *why* behind
          everything. It fundamentally changes how you think about even the
          smallest aspects of the language.
        </p>
        <p>Take this example for a moment:</p>
        <CodeSnippet lang="js">{code1}</CodeSnippet>
        <p>
          What do you think will be logged here? Take a moment to think about it
          and write down your reasoning below to lock in your answer. Then check
          the solution to see if you got it right.
        </p>
        <textarea
          placeholder="Think and write your answer here..."
          maxLength={200}
        ></textarea>
        <p>Drumroll... 🥁🥁🥁🥁🥁</p>
        <h1>Solution</h1>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          If you’ve been working with JavaScript for a while, you might not find
          it surprising. But if you’re completely baffled like I was, keep
          reading 👇
        </p>
        <p>False? But how?</p>
        <p>This is how I initially thought about it:</p>
        <CodeSnippet lang="js">{`
/* 
 we have: y = {}
 and: {} === {}
 so substituting {} with y, we get:
*/
y === {} // true?`}</CodeSnippet>
        <p>But the actual result is:</p>
        <CodeSnippet lang="js">{`y === {} // false`}</CodeSnippet>
        <p>How does that make any sense?</p>
        <p>
          It turns out I was wrong. There’s something deeper going on here. To
          understand it, we first need to clear up the basics and establish some
          common ground. We’ll circle back to this later.
        </p>
        <h1>The Basics</h1>
        <p>Do me a favor and log these values in your browser console:</p>
        <CodeSnippet lang="js">{code2}</CodeSnippet>
        <p>
          I will share the results below, but trust me you’ll learn much more if
          you try it yourself 🙂
        </p>
        <CodeSnippet lang="js">{ans2}</CodeSnippet>
        <p>"Wait… what? null is of type object?"</p>
        <p>
          If that was your reaction, I regret to inform you that this is due to
          an annoying{" "}
          <Link
            href="https://2ality.com/2013/10/typeof-null.html"
            target="_blank"
          >
            bug
          </Link>{" "}
          🐛 that was accidentally introduced into JavaScript. Unfortunately, it
          can’t be fixed because it would break all the existing code.
        </p>
        <p>And this gives us our first insight.</p>
        <p>
          There are 7 primitive values in JavaScript. Just like there are 7
          wonders of the world, 7 seas, 7 colors of the rainbow, 7 continents,
          and 7 days of the week. Of course it had to be the damn number 7.
        </p>
        <p>
          The remaining two (BigInts and Symbols) exist but are rarely used.
        </p>
        <h1>Primitive Values</h1>
        <p>Aight! Here’s the full list:</p>
        <ul>
          <li>
            <p>
              <b>Undefined</b> (undefined), unintentionally missing values.
            </p>
          </li>
          <li>
            <p>
              <b>Null</b> (null), intentionally missing values.
            </p>
          </li>
          <li>
            <p>
              <b>Booleans</b> (true, false), logical operations.
            </p>
          </li>
          <li>
            <p>
              <b>Numbers</b> (-100, 3.14, etc.), mathematical calculations.
            </p>
          </li>
          <li>
            <p>
              <b>Strings</b> ("hello", "abracadabra"), text values.
            </p>
          </li>
          <li>
            <p>
              <b>BigInts</b> uncommon, for extremely large numbers.
            </p>
          </li>
          <li>
            <p>
              <b>Symbols</b> uncommon, used to perform black magic and hide
              secrets.
            </p>
          </li>
        </ul>
        {/* TODO: Add an info note here explaining that using undefined vs null 
        for intentional vs unintentional missing values is community convention, 
        not a strict rule. */}
        <h1>Objects and Functions</h1>
        <ul>
          <li>
            <p>
              <b>Objects</b> ({"{}"} and others), used to group related data and
              code.
            </p>
          </li>

          <li>
            <p>
              <b>Functions</b>
              {` (x => x * 2, etc.), references to code.`}
            </p>
            <p>
              If you’re wondering, “What about arrays and all that stuff?” It’s
              because everything else in JavaScript is basically an ✨
              <b>
                <em>object</em>
              </b>
              ✨
            </p>
            <p>
              Well, maybe not{" "}
              <a
                href="https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object"
                target="_blank"
              >
                literally
              </a>{" "}
              everything, but *almost* everything.
            </p>
          </li>
        </ul>
        <h1>Creating a Mental Model - Variables mean Wires</h1>
        <p>
          Okay, that was a lot of nerdy stuff. Now let's get some intuition for
          it and develop a mental model.
        </p>
        <p>
          Yes, *varibles are wires*. To be more precise, they point to a value
          in memory. You can think of variables as wires that are attached to a
          value.
        </p>
        {/* <Image src="/1.png" width={500} height={250} alt="Varible is a Wire." /> */}
        <p>
          Instead of remebering where a value is stored, you can refer to it
          with that variable.
        </p>
        <p>For example, take this simple piece of code</p>
        <CodeSnippet lang="js">{code3}</CodeSnippet>
        <Video
          desc="Variables are wires"
          src="/clip_1.mp4"
          rate={0.5}
          autoPlay
          loop
          muted
        />
        <p>Javascript does few things under the hood</p>
        <ul>
          <li>
            <p>First, it creates variables called 'a'</p>
          </li>
          <li>
            <p>
              Then, it takes the value 5 and attaches it to the variable 'a'.
              Technically speaking, it stores a reference for value 5 inside
              variable 'a'.
            </p>
          </li>
          <li>
            <p>
              Now, the next time we go to 'a' and ask what value it holds, it
              will send us off to that value.
            </p>
          </li>
          <li>
            <p>
              So, the important to note here is that value 5 is NOT, stored
              inside variable 'a', it is just a reference to that variable. THIS
              is very important.
            </p>
          </li>
        </ul>
        <p>So what happens when we do this</p>
        <CodeSnippet lang="js">{`let a = 5;
let b = 5;`}</CodeSnippet>
        <p> Think for a while. Then see the solution.</p>
        <Video
          desc="Variables are wires"
          src="/clip_2.mp4"
          rate={0.5}
          controls
          loop
          muted
        />
        {/*TODO: Draw a animation for the above code.*/}
        <p>
          Shocked? I was for sure. This was my aha moment with this topic.
          Javascript can just have one primitive value and it reuses that value
          in multiple places. Everything makes sense now.
        </p>
        <h1>Using the Mental Model</h1>
        <p>"Now, what do we do with all this information?" you might ask.</p>
        <p>Do you remeber this example at the very start</p>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          We have the concepts to understand it now. Let's break the code into
          smaller chunks and digest it one by one.
        </p>
        <CodeSnippet lang="js">{`let x //declare a variable called 'x'`}</CodeSnippet>
        <CodeSnippet lang="js">{`let x = "One" //wire up that varible to a string value called "One"`}</CodeSnippet>
        <CodeSnippet lang="js">{`let y //declare a second variable called 'y'`}</CodeSnippet>
        <CodeSnippet lang="js">{`let y = {} //wire up that varible to an empty object {}`}</CodeSnippet>
        <p>Did you notice a difference?</p>
        <p>
          One is a primitive value("One") and the other is not({"{}"}). That's
          the key.
        </p>
        <p>"How does that make any difference?" you might ask.</p>
        <p>
          The difference lies in how they are referenced. When you refer to a
          "Primitive value", say a string("One"). Javascript can only have one
          string "One", there cannot be two "One". Never.
        </p>
        <p>Not convinced? I can prove it.</p>
        <p>Look at this code</p>
        <CodeSnippet lang="js">{`let str = "idea";
str[0] = '1';
console.log(str); // ??`}</CodeSnippet>
        <p>What will be the value of the log statement?</p>
        <p>Think about it and then see the solution.</p>
        <CodeSnippet lang="js">{`let str = "idea";
str[0] = '1';
console.log(str); // "idea"`}</CodeSnippet>
        <p>
          This will print "idea" or throw an error if you are in strict mode.
        </p>
        <p>
          You might fall into trap that if we can access values of string like
          an array ( str[0] ) then surely we can change them as well. right?
        </p>
        <p>
          We can't. Because it's a <em>primivite value</em>. Javascript will
          never let us change a primivite value.{" "}
          <b className={styles.special}>
            Primitive values are unique and immutable
          </b>{" "}
          There cannot be any duplicates and they cannot change.
        </p>

        <h1>Objects</h1>
        <p>So what happends when we do this.</p>
        <CodeSnippet lang="js">{`let a = {};
let b = {};`}</CodeSnippet>
        <p>Tinker, and see the solution.</p>
        <Video
          desc="Variables are wires"
          src="/clip_3.mp4"
          rate={0.5}
          controls
          loop
          muted
        />
        <p>
          strange right? Why did it not reference the same object? Why create a
          whole new empty object to refer to the same thing?
        </p>
        <p>
          Well, you see. Objects have a{" "}
          <b className={styles.special}>special status</b>✨ in javascript.
        </p>
        <p>
          Everytime you declare an empty object,{" "}
          <em>
            <b className={styles.special}>
              A new object reference is created for it.
            </b>
          </em>
        </p>
        <p>
          On further thought, it does make sense. Objects, after all will hold
          different properties and have their own context.
        </p>
        <p>That' why can do this</p>
        <p>Let's hammer in the topic with illustrations.</p>
        <CodeSnippet lang="js">{`let obj1 = {name: 'sajan'};
let obj2 = {name: 'joy'};
console.log(obj1.name);
console.log(obj2.name);`}</CodeSnippet>
        <p>
          If all objects were attached to a single empty object, that would
          cause name clashes.
        </p>
        <p>
          So now, at last, we can circle back to the example we saw in the
          beginning.
        </p>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          The '===' operator checks for references in javascript not literal
          values. It does not care if a '5' = '5' or {`{}`} is the same as{" "}
          {`{}`}. All it cares for is if those values have the same reference.
        </p>
        <p>
          So using this information. We can now easily determine the results.
        </p>
        <p>
          Since a string is primitive value, it will have the same reference.
          Therefore,
        </p>
        <CodeSnippet lang="js">{`let x = "One"; 
console.log(x === "One"); //true`}</CodeSnippet>
        <p>
          But objects are special and a new instance is created every time for
          them. When comparing {`{}`} with y results in different references.
          Which gives us.
        </p>
        <CodeSnippet lang="js">{`let y = {};
console.log(y === {});`}</CodeSnippet>
      </div>
    </>
  );
}
