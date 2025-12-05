"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";

import { LIGHT_COLORS, DARK_COLORS } from "../../constants.js";

import styles from "./ThemeToggle.module.css";

function ThemeToggle({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    root.setAttribute("data-color-theme", nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
    </button>
  );
}

export default ThemeToggle;
