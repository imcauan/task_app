"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function SwitchTheme() {
  const { setTheme, theme } = useTheme();
  return (
    <p
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" cursor-pointer"
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </p>
  );
}
