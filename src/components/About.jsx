import React from "react";

// import { AboutCard } from "@/storiesComponents/About";
import { AboutCard } from "../storiesComponents/About";
const About = () => {
  return (
    <div id="about">
      <div className="flex justify-center items-center p-5 pt-16 ">
        <h1 className="uppercase text-5xl">About</h1>
      </div>
      <div>
        <AboutCard  flex={"center"} sizeText={"2xl"} sizeTitle={"3xl"} rounded="61px"  />
      </div>
    </div>
  );
};

export default About;
