"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBungalovData, fetchBlogData } from "@/stores/user-store";
import Image from "next/image";

const Page = ({ params }) => {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.user.blog);
  const bungalovData = useSelector((state) => state.user.bungalov);
  const paramsid = params.id;

  useEffect(() => {
    dispatch(fetchBlogData());
    dispatch(fetchBungalovData());
  }, [dispatch]);

  const keyword = params.keyword;

  const filteredBlogData = blogData.filter((item) =>
    [item.name, item.explanation, item.info].some((field) =>
      field.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  const filteredBungalovData = bungalovData.filter((item) =>
    [item.name, item.explanation, item.info].some((field) =>
      field.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return (
    <div>
      {filteredBlogData.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.explanation}</p>
          <p>{data.info}</p>
          <Image src={data.image} alt={data.name} width={300} height={200} />
        </div>
      ))}
      {filteredBungalovData.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.explanation}</p>
          <p>{data.info}</p>
          <Image src={data.image} alt={data.name} width={300} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Page;

