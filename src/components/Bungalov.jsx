"use client";

import React from "react";

import { Card } from "@/storiesComponents/BungalovCard";
import { bungalovData } from "./data";
const Bungalov = () => {
  return (
    <div id="bungalov">
      <div className="flex justify-center items-center p-5 pt-16 ">
        <h1 className="uppercase text-5xl pb-8">Bungalov</h1>
      </div>
      
      {/* card */}
      <>
        <Card
          height="480px"
          width="310px"
          backgroundColor="#711414"
          rounded="48px"
          sizeText="lg"
          sizeTitle="lg"
        />
      </>
      
    </div>
  );
};

export default Bungalov;
