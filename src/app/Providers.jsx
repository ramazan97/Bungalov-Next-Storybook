"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { StoreProvider } from "@/stores/store-provider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <StoreProvider> {children}</StoreProvider>
    </ThemeProvider>
  );
};

export default Providers;
