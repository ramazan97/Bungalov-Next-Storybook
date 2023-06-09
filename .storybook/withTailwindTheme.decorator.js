// .storybook/withTailwindTheme.decorator.js

import { useEffect } from "react";
import "../tailwind.config"
import "../src/app/globals.css";
import "../public/tailwind.css";


export const DEFAULT_THEME = "light";

export const withTailwindTheme = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return <Story />;
};
