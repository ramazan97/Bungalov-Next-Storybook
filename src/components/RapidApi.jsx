"use client";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();

  const url = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "93f4d9cc5fmshe8fd31ad1252d1cp192bdcjsn56dd28b12381",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return (
    <>
      <h1>---------------------</h1>
      <h1>---------RapidApi------</h1>
      <h1>---------------------</h1>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        {data &&
          data.map((d) => {
            return (
              <div key={d.planetOrder}>
                <h2>{d.name} </h2>
                <Image
                  src={d.imgSrc.img}
                  width="100"
                  height="100"
                  alt={d.name}
                />
                <br />
                {d.description}
                <br />
                {d.wikiLink}
              </div>
            );
          })}
      </main>
    </>
  );
}
