"use client";
import React, { useMemo } from "react";
import { bungalovData } from "../components/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Router } from "next/router";
import PropTypes from "prop-types";
export function Card({
  width,
  height,
  backgroundColor,
  rounded,
  sizeText,
  sizeTitle,
  label,
  ...props
}) {
  return (
    <>
      <div>
        <div className="xl:flex xl:items-center xl:justify-center">
          <div className=" h-[510px] w-[1109px] ">
            <Swiper
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={30}
              grabCursor={false}
              className=" w-[1000px] "
            >
              {bungalovData.map((bungo) => {
                return (
                  <SwiperSlide key={bungo.id} className="">
                    <div
                      style={{
                        ...(backgroundColor ? { backgroundColor } : {}),
                        borderBottomRightRadius: `${rounded}`,
                        borderTopLeftRadius: `${rounded}`,
                        width: `${width}`,
                        height: `${height}`,
                      }}
                      className={` container h-${height}  w-${width}  md:w-72 border `}
                    >
                      <div
                        style={{ borderRadius: `${rounded}` }}
                        className={`bg-gray-200 rounded-tl-${rounded} rounded-br-${rounded}`}
                      >
                        <img
                          src={bungo.image}
                          style={{
                            borderBottomRightRadius: `${rounded}`,
                            borderTopLeftRadius: `${rounded}`,
                            width: `${width}`,
                          }}
                          className={`lg:h-72 md:h-48 w-${width} md:w-72 object-cover object-center border-[15px] rounded-tl-${rounded} rounded-br-${rounded}`}
                          alt="slider 1"
                        />
                      </div>
                      <div className="">
                        <h4
                          style={{ fontSize: `${sizeTitle} ` }}
                          className={`text-${sizeTitle}  text-gray-200 flex justify-center`}
                        >
                          {bungo.name}
                        </h4>

                        <p
                          style={{ fontSize: `${sizeText} ` }}
                          className={`text-${sizeText} text-gray-200`}
                        >
                          {bungo.info}
                        </p>
                        <button
                          className="text-[14px] underline text-gray-200"
                          onClick={() =>
                            (window.location.href = `/detailbunglov/${bungo.id}`)
                          }
                        >
                          read more
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {

  backgroundColor: PropTypes.string,

  sizeTitle: PropTypes.oneOf(["sm", "md", "lg"]),
  sizeText: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.oneOf(["0px", "35px", "48px", "61px"]),
  width: PropTypes.oneOf(["200px", "310px", "480px", "610px"]),
  height: PropTypes.oneOf(["200px", "310px", "480px", "610px"]),
};

Card.defaultProps = {
  backgroundColor: null,
  sizeTitle: "md",
  sizeText: "md",
  rounded: "48px",
  width: "310px",
  height: "480px",
};
