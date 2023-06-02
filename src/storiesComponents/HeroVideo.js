"use client";
import React from "react";
import ThemeComp from "../components/ThemeComp.jsx";
import { FaLeaf } from "react-icons/fa";

import PropTypes from "prop-types";
export function HeroVideo({
  logoColor,
  sizeText,
  textColor,
  sizeTitle,
  titleColor,
}) {
  return (
    <>
      <div className=" hero absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-gray-800">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 bottom-0 z-[-1] back-video"
        >
          <source
            src="/video/Nisa Bungalov Tanıtım @nisabungalov.mp4"
            type="video/mp4"
          />
        </video>

        <nav className="  w-full absolute top-0 left-0 px-8 py-5 flex items-center justify-between">
          <div className="">
            <div className=" text-gray-100 dark:text-gray-100 rounded-lg p-3 text-[40px] lg:text-2xl font-bold font-Bruno  ">
              <FaLeaf style={{ color: `${logoColor}` }} size={65} />
            </div>
          </div>
          <div className=" flex-1 ">
            <div className="flex items-center justify-center ">
              {" "}
              <ul>
                <li className="list-none inline-block ">
                  <a
                    href="/"
                    style={{ color: `${titleColor}`,fontSize: `${sizeTitle} `  }}
                    className={`no-underline text-white text-${sizeTitle} hover:underline hover:text-[24px] duration-500`}
                  >
                    Ana Sayfa
                  </a>
                </li>
                <li className="list-none inline-block ml-20">
                  <a
                    href="#about"
                    style={{ color: `${titleColor}`,fontSize: `${sizeTitle} `  }}
                    className={`no-underline text-white text-${sizeTitle} hover:underline hover:text-[24px] duration-500`}
                  >
                    About
                  </a>
                </li>
                <li className="list-none inline-block ml-20">
                  <a
                    href="#bungalov"
                    style={{ color: `${titleColor}`,fontSize: `${sizeTitle} `  }}
                    className={`no-underline text-white text-${sizeTitle} hover:underline hover:text-[24px] duration-500`}
                  >
                    Bungalov
                  </a>
                </li>
                <li className="list-none inline-block ml-20">
                  <a
                    href="#blog"
                    style={{ color: `${titleColor}` ,fontSize: `${sizeTitle} ` }}
                    className={`no-underline text-white text-${sizeTitle} hover:underline hover:text-[24px] duration-500`}
                  >
                    Blog
                  </a>
                </li>
                <li className="list-none inline-block ml-20  ">
                  <a
                    href="#"
                    style={{ color: `${titleColor}`,fontSize: `${sizeTitle} `  }}
                    className={`no-underline text-white text-${sizeTitle}`}
                  >
                    <ThemeComp />
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </nav>
        <div className="text-center">
          <h1
            style={{ color: `${textColor}`,fontSize: `${sizeText} `  }}
            className={`text-${sizeText} text-white font-semibold transition duration-500 hover:text-white hover:text-stroke`}
          >
            SAKARYA
          </h1>
          <a
            href="#bungalov"
            className={`text-white no-underline inline-block text-lg border-2 border-white py-[14px] px-[70px] rounded-full mt-[20px] hover:bg-white hover:text-gray-700`}
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
}
HeroVideo.propTypes = {
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
  logoColor: PropTypes.string,
  sizeTitle: PropTypes.oneOf(["sm", "md", "lg", "20px"]),

  sizeText: PropTypes.oneOf(["sm", "md", "lg", "6xl"]),
};

HeroVideo.defaultProps = {
  textColor: null,
  titleColor: null,
  logoColor: null,
  sizeTitle: "20px",
  sizeText: "6xl",
};
