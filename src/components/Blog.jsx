"use client";

import { BlogCard } from "@/storiesComponents/BlogCard";
const Blog = () => {
  return (
    <div id="blog" className=" mt-3">
      <div className="flex justify-center items-center p-5 pt-16 ">
        <h1 className="uppercase text-5xl pb-8">Blog</h1>
      </div>
      <div>
        {" "}
        <BlogCard border="[15px]"  backgroundColor="#711414" rounded="48px" sizeText={"lg"} sizeTitle={"md"}/>
      </div>
    </div>
  );
};

export default Blog;
