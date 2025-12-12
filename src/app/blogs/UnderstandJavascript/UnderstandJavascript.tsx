import styles from "./UnderstandJavascript.module.css";
import { format } from "date-fns";
import { BlogGridType } from "../index";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import Link from "next/link";
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
          Recently, I took a 100 dollar JavaScript course called{" "}
          <a href="https://justjavascript.com/" target="_blank">
            Just JavaScript.
          </a>
        </p>
        <p>
          It was created by{" "}
          <a href="https://overreacted.io/" target="_blank">
            Dan Abramov
          </a>
          , a member of the React team and co author of Redux and Create React
          App.
        </p>
        <p>
          As the name suggests, <em>it is really just JavaScript</em>. But it
          teaches you JavaScript extremely well.
        </p>
        <p>
          The course begins by completely breaking your mental model of
          JavaScript, then slowly rebuilding it by explaining the reason behind
          everything. It fundamentally changes how you think about even the
          smallest aspects of the language.
        </p>
        <p>Take this example for a moment.</p>
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
        <h1>Solution</h1>
        <p>Drumroll please🥁🥁🥁🥁</p>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>
        <p>
          If you have been working with JavaScript for a while, you might not
          find it surprising. But if you are completely confused like I was,
          keep reading.
        </p>
        <p>False? But how?</p>
        <p>This is how I initially thought about it.</p>
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
          It turns out I was mistaken. There is something deeper happening here.
          To understand it, we first need to clear up the basics and establish
          some common ground. We will circle back to this later.
        </p>
        <h1>The Basics</h1>
        <p>Do me a favor and log these values in your browser console.</p>
        <CodeSnippet lang="js">{code2}</CodeSnippet>
        <p>
          I will share the results below, but trust me you will learn much more
          if you try it yourself.
        </p>
        <p>Done? Here are the logs.</p>
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
          that was accidentally introduced into JavaScript. Unfortunately, it
          cannot be fixed because it would break existing code.
        </p>
        <p>And this gives us our first insight.</p>
        <p>
          Modern JavaScript has seven primitive types: undefined, null, boolean,
          number, string, bigint, and symbol.
        </p>
        <p>
          Just like there are seven wonders of the world, seven seas, seven
          colors of the rainbow, seven continents, and seven days of the week.
          Of course it had to be the number seven.
        </p>
        <p>
          The remaining two, BigInts and Symbols, exist but are rarely used so
          will not be in the spotlight. I will talk about them in future posts.
        </p>

        <h1>Primitive Values</h1>
        <p>Here is the full list.</p>
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
              <b>Numbers</b> numerical values for mathematical calculations.
            </p>
          </li>
          <li>
            <p>
              <b>Strings</b> text values.
            </p>
          </li>
          <li>
            <p>
              <b>BigInts</b> uncommon, for extremely large numbers.
            </p>
          </li>
          <li>
            <p>
              <b>Symbols</b> uncommon, used to hide internal implementation
              details.
            </p>
          </li>
        </ul>

        <h1>Objects and Functions</h1>
        <ul>
          <li>
            <p>
              <b>Objects</b> used to group related data and code.
            </p>
          </li>
          <li>
            <p>
              <b>Functions</b> references to executable code.
            </p>
            <p>
              If you are wondering “What about arrays and all that stuff?” the
              answer is that almost everything else in JavaScript is an object.
            </p>
            <p>Well, maybe not literally everything, but almost everything.</p>
          </li>
        </ul>

        <h1>Creating a Mental Model. Variables mean Wires</h1>
        <p>
          That was a lot of information. Now let us build intuition and develop
          a mental model.
        </p>
        <p>
          Variables behave like wires. More precisely, they point to a value in
          memory. You can think of variables as wires that are attached to a
          value.
        </p>

        <p>
          Instead of remembering where a value is stored, you can refer to it
          with the variable.
        </p>
        <p>For example, take this simple piece of code.</p>
        <CodeSnippet lang="js">{code3}</CodeSnippet>
        <Video
          desc="Variables are wires"
          src="/clip_1.mp4"
          rate={0.5}
          autoPlay
          loop
          muted
        />
        <p>JavaScript does a few things under the hood.</p>
        <ul>
          <li>
            <p>First, it creates a variable called a.</p>
          </li>
          <li>
            <p>
              Then it takes the value five and attaches it to the variable a.
              Technically speaking, it stores a reference to the value five
              inside the variable a.
            </p>
          </li>
          <li>
            <p>
              The next time we access a and ask for its value, it will direct us
              to that value.
            </p>
          </li>
          <li>
            <p>
              The important point here is that the value five is not stored
              inside the variable a. The variable only holds a reference. This
              is very important.
            </p>
          </li>
        </ul>

        <p>So what happens when we do this.</p>
        <CodeSnippet lang="js">{`let a = 5;
let b = 5;`}</CodeSnippet>
        <p>Think for a moment, then see the solution.</p>
        <Video
          desc="Variables are wires"
          src="/clip_2.mp4"
          rate={0.5}
          controls
          loop
          muted
        />

        <p>
          Surprising right? This was my aha moment. JavaScript can reuse the
          same primitive value across multiple variables. Everything begins to
          make sense now.
        </p>

        <h1>Using the Mental Model</h1>
        <p>You may ask “What do we do with this information?”</p>
        <p>Remember the first example.</p>
        <CodeSnippet lang="js">{ans1}</CodeSnippet>

        <p>
          We now have the concepts to understand it. Let us break it into
          smaller parts and understand each piece.
        </p>
        <CodeSnippet lang="js">{`let x //declare a variable called x`}</CodeSnippet>
        <CodeSnippet lang="js">{`let x = "One" //attach that variable to a string value called One`}</CodeSnippet>
        <CodeSnippet lang="js">{`let y //declare a second variable called y`}</CodeSnippet>
        <CodeSnippet lang="js">{`let y = {} //attach that variable to an empty object`}</CodeSnippet>
        <p>Did you notice a difference?</p>
        <p>
          One is a primitive value and the other is not. That is the crucial
          point.
        </p>
        <p>You may ask “How does that make any difference?”</p>
        <p>
          The difference lies in how references are stored. When you refer to a
          primitive value, for example the string One, JavaScript has only one
          copy of that string. There cannot be two separate values that both
          literally represent One.
        </p>

        <p>Not convinced? Here is proof.</p>
        <CodeSnippet lang="js">{`let str = "idea";
str[0] = '1';
console.log(str); // ??`}</CodeSnippet>
        <p>Think about it, then check the result.</p>
        <CodeSnippet lang="js">{`let str = "idea";
str[0] = '1';
console.log(str); // "idea"`}</CodeSnippet>
        <p>
          This prints idea or throws an error in strict mode. You might think
          that if we can access characters of a string like an array, then we
          should be able to modify them. Right?
        </p>
        <p>
          We cannot, because it is a primitive value. JavaScript will never
          allow us to change a primitive value.{" "}
          <b className={styles.special}>
            Primitive values are immutable and compared by value.
          </b>{" "}
          They cannot change and cannot have duplicates.
        </p>

        <h1>Objects</h1>
        <p>So what happens when we do this.</p>
        <CodeSnippet lang="js">{`let a = {};
let b = {};`}</CodeSnippet>
        <p>Think and experiment with it, then see the solution.</p>
        <Video
          desc="Variables are wires"
          src="/clip_3.mp4"
          rate={0.5}
          controls
          loop
          muted
        />
        <p>
          Strange right? Why does it not reference the same object? Why create a
          new object?
        </p>
        <p>
          This is because objects have a{" "}
          <b className={styles.special}>special status</b> in JavaScript.
        </p>
        <p>
          Each time you create an empty object,{" "}
          <b className={styles.special}>
            a completely new reference is created
          </b>
          .
        </p>
        <p>
          When you think about it, this makes sense. Objects hold properties and
          represent their own context.
        </p>
        <p>That is why we can do this.</p>
        <CodeSnippet lang="js">{`let obj1 = {name: 'sajan'};
let obj2 = {name: 'joy'};
console.log(obj1.name);
console.log(obj2.name);`}</CodeSnippet>
        <p>
          If all objects were attached to the same reference, property values
          would clash instantly.
        </p>

        <p>Now we can finally return to the example from the beginning.</p>

        <CodeSnippet lang="js">{ans1}</CodeSnippet>

        <p>
          The triple-equals operator (===) compares primitive values by value
          and compares objects by reference. For primitives, JavaScript checks
          whether the actual values are the same. But for objects, it only
          checks whether both variables point to the exact same object in memory
          — not whether the objects contain the same properties or “look”
          identical.{" "}
        </p>

        <p>With this understanding, we can determine the results easily.</p>

        <p>
          Since a string is a primitive value, It will be compared by value.
          Therefore:
        </p>
        <CodeSnippet lang="js">{`let x = "One"; 
console.log(x === "One"); //true`}</CodeSnippet>

        <p>
          But objects are special and a new instance is created each time. They
          are compared with reference. A object y which is equal to an object (
          {`{}`}) will not equal to another empty object ({`{}`}) because they
          different references. So That gives us:
        </p>
        <CodeSnippet lang="js">{`let y = {};
console.log(y === {}); //false`}</CodeSnippet>
        <p>
          I hope I was able to clarify a few things. This is just a small
          fraction of what the course teaches you about JavaScript.
        </p>
        <p>
          That said, the course is quite short and doesn’t cover the entirety of
          JavaScript. It mainly focuses on primitives and objects, and you can
          finish it in just a few hours.
        </p>
        <p>
          I would recommend this course only if you already have a solid
          foundation and want to dig deeper into the language.
        </p>
        <p>See you in my next blog 😄✌️</p>
      </div>
    </>
  );
}
