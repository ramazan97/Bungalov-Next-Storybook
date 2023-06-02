"use client";
import React from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  // console.log(theme, "theme");
  return (
    <div className="">
      {mounted &&
        (themeMode === "light" ? (
          <CiDark
            onClick={() => setTheme("dark")}
            className="cursor-pointer"
            size={25}
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className="cursor-pointer"
            size={25}
          />
        ))}

      {/* The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
    </div>
  );
};

export default ThemeComp;
