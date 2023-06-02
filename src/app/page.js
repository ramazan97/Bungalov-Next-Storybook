import About from "@/components/About";
import Blog from "@/components/Blog";
import RapidApi from "@/components/RapidApi";
import Axios from "@/components/Axios";
import Bungalov from "@/components/Bungalov";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroV";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-3xl font-bold">


      <HeroVideo />
      {/* <Header/> */}
      <div className=" bottom-0 w-full bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black">
        <About />
        <Bungalov />
        <Blog />
      </div>

      {/* <Hero />
     
       */}
      {/*  
      <RapidApi />
      <Axios /> */}
    </main>
  );
}
