"use client";
import React from "react";
import { blogData } from "../components/data";

import PropTypes from "prop-types";

export function BlogCard({
  border,
  backgroundColor,
  rounded,
  sizeText,
  sizeTitle,
  label,
  ...props
}) {

  return (
    <>
      <div className=" flex items-center justify-center container ">
        <div className=" flex flex-wrap justify-center">
          {blogData.map((blog) => (
            <div key={blog.id} className="flex-grow w-1/2 mb-4 px-2 mt-[5px] ">
              <div
                style={{
                  ...(backgroundColor ? { backgroundColor } : {}),
                  borderRadius: `${rounded}`,
                }}
                className={`border rounded-tl-${rounded} rounded-br-${rounded}`}
              >
                <div
                  style={{ borderRadius: `${rounded}` }}
                  className={`bg-gega-grey rounded-tl-${rounded} rounded-br-${rounded}`}
                >
                  <img
                    src={blog.image}
                    style={{
                      borderRadius: `${rounded}`,
                    }}
                    className={`object-cover h-72 w-full  border-${border}`}
                    alt="slider 1"
                  />
                </div>
                <div className="p-2">
                  <h4
                    style={{ fontSize: `${sizeTitle} ` }}
                    className={`text-gray-200 uppercase text-${sizeTitle} pt-5 flex justify-center`}
                  >
                    {blog.name}
                  </h4>
                  <p
                    style={{ fontSize: `${sizeText} ` }}
                    className={`text-gray-200 text-${sizeText} pt-3`}
                  >
                    {blog.info}
                  </p>
                  <button
                    style={{ fontSize: `${sizeText} ` }}
                    className={`text-gray-200 text-${sizeText} underline `}
                    onClick={() =>
                      (window.location.href = `/detayblog/${blog.id}`)
                    }
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

BlogCard.propTypes = {

  backgroundColor: PropTypes.string,

  sizeTitle: PropTypes.oneOf(["sm", "md", "lg"]),
  sizeText: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.oneOf(["0px", "35px", "48px", "61px"]),
  border: PropTypes.oneOf(["[0px]", "[15px]", "[30px]", "[45px]"]),
};

BlogCard.defaultProps = {
  backgroundColor: null,
  sizeTitle: "lg",
  sizeText: "md",
  rounded: "48px",

  border: "[15px]",
};
