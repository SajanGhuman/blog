import { Code } from "bright";
import theme from "./theme";
import styles from "./CodeSnippet.module.css";

type CodeSnippetProps = React.ComponentProps<typeof Code>;

function CodeSnippet(props: CodeSnippetProps) {
  return <Code {...props} theme={theme} className={styles.wrapper} />;
}

export default CodeSnippet;
