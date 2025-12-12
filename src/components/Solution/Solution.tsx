"use client";
import React, { useState } from "react";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";
import styles from "./Solution.module.css";

export default function Solution({ ans1 }: { ans1: string }) {
  const [showGlass, setShowGlass] = useState(true);

  return (
    <div className={styles.codeContainer}>
      <CodeSnippet lang="js">{ans1}</CodeSnippet>

      {showGlass && <div className={styles.glassOverlay}></div>}

      <button
        className={styles.toggleBtn}
        onClick={() => setShowGlass(!showGlass)}
      >
        {showGlass ? "Hide Overlay" : "Show Overlay"}
      </button>
    </div>
  );
}
