"use client";
import Head from "next/head";
// import { Inter } from "next/font/google";
import style from "../app/globals.css";
import Map from "./Mapfolder/index";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-5 pt-16 ">
        <h1 className="uppercase text-5xl pb-8">konum</h1>
      </div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` `}>
        <Map />
      </main>
    </>
  );
}
