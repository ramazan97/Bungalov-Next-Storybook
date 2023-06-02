"use client";
import React, { useState } from "react";
import Link from "next/link";

import PropTypes from "prop-types";
export function TabCard( {sizeTitle}) {

  const tabs = [
    {
      name: "Ana Sayfa",
      url: "/",
    },
    {
      name: "Bungalov",
      url: "#bungalov",
    },
    {
      name: "Blog",
      url: "#blog",
    },
  ];
  return (
    <>
      <div className="p-5 m-5 gap-7 bg-gray-200 dark:bg-gray-800 flex items-center justify-center ">
        {tabs.map((tab, i) => (
          <Link
            key={i}
            className="cursor-pointer hover:text-amber-600 hover:underline transition-opacity  duration-500"
            href={tab.url}
          >
            <h3  style={{ fontSize: `${sizeTitle} ` }} className={`text-${sizeTitle}`}> {tab.name}</h3>
          </Link>
        ))}
      
      </div>
    </>
  );
}
TabCard.propTypes = {
  backgroundColor: PropTypes.string,
  sizeTitle: PropTypes.oneOf(["sm", "md", "lg"]),
};

TabCard.defaultProps = {
  backgroundColor: null,
  sizeTitle: "md",
};
