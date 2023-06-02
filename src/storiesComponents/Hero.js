"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper";

import PropTypes from "prop-types";
export function HeroCard({ sizeText, textColor, sizeTitle, titleColor }) {
  return (
    <>
      <div className="h-128  group relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, EffectFade, Pagination]}
          className="mySwiper"
          effect={"fade"}
        >
          <SwiperSlide className="h-128 group relative">
            <div>
              <div className="h-64 md:h-96 lg:h-128 group relative">
                <img
                  src="../bungalov/B101/main1.jpg"
                  className="h-full w-full object-cover"
                  alt="slider 1"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-black ">
                <div className="container">
                  <h3
                    style={{
                      color: `${titleColor}`,
                      fontSize: `${sizeTitle} `,
                    }}
                    className={` text-${sizeTitle}  uppercase tracking-wide group-hover:mb-1 duration-500`}
                  >
                    Bungalov| Bahçe| İmkanlar
                  </h3>
                  <h1
                    style={{ color: `${textColor}` }}
                    className={`uppercase text-4xl lg:text-6xl  group-hover:mb-1 duration-500 `}
                  >
                    Bungalov 1
                  </h1>
                  <p
                    style={{ color: `${textColor}`, fontSize: `${sizeText} ` }}
                    className={`  group-hover:mb-1 duration-500 text-${sizeText} lg:text-${sizeText}  w-3/4 lg:w-2/3 `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, aperiam.
                  </p>

                  <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000">
                    <div className="flex space-x-2 items-center cursor-pointer group-hover:mb-1 duration-1000">
                      <a
                        href="#"
                        style={{ color: `${textColor}` }}
                        className={` uppercase lg:text-lg font-Gemunu  hover:text-red-500 duration-500`}
                      >
                        Detay
                      </a>
                      <div
                        className={`flex h-8 w-8 rounded-full text-center items-center justify-center bg-red-500 text-gray-200`}
                      >
                        <FaPlay className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-128 group relative">
            <div>
              <div className="h-64 md:h-96 lg:h-128 group relative">
                <img
                  src="../bungalov/B125/WhatsApp Görsel 2023-03-31 saat 23.47.52.jpg"
                  className="h-full w-full object-cover"
                  alt="slider 2"
                />
              </div>

              <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-black ">
                <div className="container">
                  <h3
                    style={{
                      color: `${titleColor}`,
                      fontSize: `${sizeTitle} `,
                    }}
                    className={` text-${sizeTitle}  uppercase tracking-wide group-hover:mb-1 duration-500`}
                  >
                    Bungalov| Bahçe| İmkanlar
                  </h3>
                  <h1
                    style={{ color: `${textColor}` }}
                    className={`uppercase text-4xl lg:text-6xl  group-hover:mb-1 duration-500 `}
                  >
                    Bungalov 2
                  </h1>
                  <p
                    style={{ color: `${textColor}`, fontSize: `${sizeText} ` }}
                    className={`  group-hover:mb-1 duration-500 text-${sizeText} lg:text-${sizeText}  w-3/4 lg:w-2/3 `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, aperiam.
                  </p>

                  <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000">
                    <div className="flex space-x-2 items-center cursor-pointer group-hover:mb-1 duration-1000">
                      <a
                        href="#"
                        style={{ color: `${textColor}` }}
                        className={` uppercase lg:text-lg font-Gemunu  hover:text-red-500 duration-500`}
                      >
                        Detay
                      </a>
                      <div
                        className={`flex h-8 w-8 rounded-full text-center items-center justify-center bg-red-500 text-gray-200`}
                      >
                        <FaPlay className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-128 group relative">
            <div>
              <div className="h-64 md:h-96 lg:h-128 group relative">
                <img
                src="../bungalov/B128/main.jpg"
                  className="h-full w-full object-cover"
                  alt="slider 3"
                />
              </div>

              <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-black ">
                <div className="container">
                  <h3
                    style={{
                      color: `${titleColor}`,
                      fontSize: `${sizeTitle} `,
                    }}
                    className={` text-${sizeTitle}  uppercase tracking-wide group-hover:mb-1 duration-500`}
                  >
                    Bungalov| Bahçe| İmkanlar
                  </h3>
                  <h1
                    style={{ color: `${textColor}` }}
                    className={`uppercase text-4xl lg:text-6xl  group-hover:mb-1 duration-500 `}
                  >
                    Bungalov 3
                  </h1>
                  <p
                    style={{ color: `${textColor}`, fontSize: `${sizeText} ` }}
                    className={`  group-hover:mb-1 duration-500 text-${sizeText} lg:text-${sizeText}  w-3/4 lg:w-2/3 `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, aperiam.
                  </p>

                  <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-20 duration-1000">
                    <div className="flex space-x-2 items-center cursor-pointer group-hover:mb-1 duration-1000">
                      <a
                        href="#"
                        style={{ color: `${textColor}` }}
                        className={` uppercase lg:text-lg font-Gemunu  hover:text-red-500 duration-500`}
                      >
                        Detay
                      </a>
                      <div
                        className={`flex h-8 w-8 rounded-full text-center items-center justify-center bg-red-500 text-gray-200`}
                      >
                        <FaPlay className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
HeroCard.propTypes = {
  textColor: PropTypes.string,
  titleColor: PropTypes.string,

  sizeTitle: PropTypes.oneOf(["sm", "md", "lg", "20px"]),

  sizeText: PropTypes.oneOf(["sm", "md", "lg", "6xl"]),
};

HeroCard.defaultProps = {
  textColor: null,
  titleColor: null,

  sizeTitle: "md",
  sizeText: "6xl",
};
