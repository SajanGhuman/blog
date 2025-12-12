"use client";
import React from "react";
import clsx from "clsx";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
  DRACULA_COLORS,
  RETRO_COLORS,
} from "@/constants";

import styles from "./Header.module.css";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  initialTheme: string;
  className?: string;
}

function Header({ initialTheme, className, ...delegated }: HeaderProps) {
  const [theme, setTheme] = React.useState(initialTheme);
  const router = useRouter();
  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === "light" ? RETRO_COLORS : DARK_TOKENS;
    const root = document.documentElement;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <h1 onClick={() => router.push("/")}>SS</h1>
      <div className={styles.actions}>
        <button className={styles.action} onClick={handleToggleTheme}>
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
