import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { LIGHT_COLORS, DARK_COLORS } from "../constants.js";
import Header from "../components/Header/Header";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Sajan's Personal Blog Website",
};

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = (await cookies()).get("color-theme");
  const theme: string = savedTheme?.value || "light";
  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_COLORS : DARK_COLORS}
    >
      <body>
        <Header initialTheme={theme} />
        <main>{children}</main>
      </body>
    </html>
  );
}
