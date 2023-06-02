"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import MenuItem from "../components/MenuItem";
import ThemeComp from "../components/ThemeComp";
import PropTypes from "prop-types";
export function NavbarCardSec({ gap, backgroundColor, sizeText, sizeTitle }) {
  const [keyword, setKeyword] = useState("");

  const menu = [
    {
      name: "Ana Sayfa",
      url: "/",
    },
    {
      name: "About",
      url: "/#about",
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

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      window.location.href = `/search/${keyword}`;
      setKeyword("");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between gap-4 lg:gap-7 h-18 lg:h-20 p-3 lg:p-5">
        <div
          style={backgroundColor && { backgroundColor }}
          className={`bg-orange-400 text-gray-700 dark:text-gray-100 rounded-lg p-3 text-xl lg:text-2xl font-bold font-Bruno`}
        >
          <FaLeaf size={40} />
        </div>

        <div className="block md:hidden pr-4 ">
          <div className="space-y-1 cursor-pointer  ">
            <div className=" bg-gray-200 w-8 h-1 rounded-s-full "></div>
            <div className=" bg-gray-200 w-8 h-1 rounded-s-full"></div>
            <div className=" bg-gray-200 w-8 h-1 rounded-s-full"></div>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center p-3 gap-4 lg:gap-7  ">
          {menu.map((mn, i) => (
            <div
              key={i}
              style={{ fontSize: `${sizeTitle} ` }}
              className={`whitespace-nowrap text-${sizeTitle} `}
            >
              <MenuItem mn={mn} key={i} />
            </div>
          ))}{" "}
          <ThemeComp />
        </div>

        <div
          className={`hidden md:flex  items-center  gap-${gap} border p-3 rounded-lg `}
        >
          <input
            value={keyword}
            onKeyDown={searchFunc}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            className="outline-none flex-1 bg-transparent"
            placeholder="Aramaza Yapınız !!!"
          />
          <BiSearch size={25} />
        </div>
      </div>
    </>
  );
}
NavbarCardSec.propTypes = {
  backgroundColor: PropTypes.string,
  sizeText: PropTypes.oneOf(["sm", "md", "lg"]),
  sizeTitle: PropTypes.oneOf(["sm", "md", "lg"]),
  gap: 3,
};

NavbarCardSec.defaultProps = {
  backgroundColor: null,
  sizeText: "md",
  sizeTitle: "md",
  gap: 3,
};
