import React from "react";
import PropTypes from "prop-types";
// import * as Images from "../../public/bungalov/index.js";
export function AboutCard({ flex, sizeText, sizeTitle, rounded }) {
  return (
    <>
      <div className="container flex flex-row pt-4 space-x-8">
        <div
          style={{ fontSize: `${sizeTitle} ` }}
          className={`text-${sizeTitle}  font-open container basis-2/5`}
        >
          <h3
            style={{ justifyContent: `${flex} `, alignItems: `${flex} ` }}
            className={`flex justify-${flex} items-${flex} text-red-400 dark:text-yellow-200 p-4`}
          >
            Explanation
          </h3>
          <p
            style={{
              justifyContent: `${flex} `,
              alignItems: `${flex} `,
              fontSize: `${sizeText} `,
            }}
            className={`flex justify-${flex} items-${flex}  text-${sizeText} text-gray-800 dark:text-gray-200 `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            nesciunt, est molestias laboriosam nihil optio, officiis voluptate
            id inventore sit perferendis itaque! Beatae, incidunt maxime esse
            sit similique harum quae blanditiis dicta iusto non officiis tenetur
            molestias amet laudantium temporibus alias voluptates vitae eius
            fugiat neque nobis aperiam. Voluptates, in.
          </p>
        </div>
        <div className=" basis-3/5">
          <img
            src="../bungalov/B101/main1.jpg"
            style={{ borderRadius: `${rounded}` }}
            className={`h-full w-full object-cover rounded-${rounded} `}
            alt="slider 1"
          />
        </div>
      </div>
    </>
  );
}

AboutCard.propTypes = {

  sizeTitle: PropTypes.oneOf(["sm", "md", "lg", "3xl"]),
  sizeText: PropTypes.oneOf(["sm", "md", "lg", "2xl"]),
  flex: PropTypes.oneOf(["start", "center", "end"]),
  rounded: PropTypes.oneOf(["0px", "35px", "48px", "61px"]),

};

AboutCard.defaultProps = {
  sizeTitle: "3xl",
  sizeText: "2xl",
  rounded: "[48px]",
  flex: "center",

};
