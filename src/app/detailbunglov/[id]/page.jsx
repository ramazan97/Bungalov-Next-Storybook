"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBungalovData } from "../../../stores/user-store";
import Image from "next/image";

import Map from "../../../components/Map";

import Header from "@/components/Header.jsx";

const Page = ({ params }) => {
  const dispatch = useDispatch();
  const bungalovData = useSelector((state) => state.user.bungalov);
  const paramsid = params.id;
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem(`comments-${params.id}`);

    return storedComments ? JSON.parse(storedComments) : [];
  });

  useEffect(() => {
    dispatch(fetchBungalovData());
  }, [dispatch]);

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNewCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      const comment = {
        id: Date.now(),
        content: newComment,
      };
      setComments([...comments, comment]);
      localStorage.setItem(
        `comments-${paramsid}`,
        JSON.stringify([...comments, comment])
      );
      setNewComment("");
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${paramsid}`,
      JSON.stringify(updatedComments)
    );
  };


  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <div>
        <div className="container">
          {bungalovData.map(
            (bungo) =>
              Number(bungo.id) === Number(paramsid) && (
                <div key={bungo.id}>
                  <div className="bg-gega-grey rounded-tl-[50px] rounded-br-[50px]">
                    <img
                      src={bungo.image}
                      className="object-cover h-128 w-full border-[15px] rounded-tl-[48px] rounded-br-[48px]"
                      alt="slider 1"
                    />
                  </div>
                  <h4 className="text-3xl pt-5 flex justify-center uppercase">
                    {bungo.name}
                  </h4>
                  <div className="mt-7 ">
                    <p>{bungo.explanation}</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi quidem numquam architecto unde recusandae, veniam
                      assumenda ipsa quis perspiciatis mollitia, cum tempore.
                      Atque assumenda aspernatur consectetur non, perferendis,
                      libero optio suscipit expedita voluptates magni incidunt
                      illo delectus dicta. Provident ex repudiandae facere quam
                      eius quaerat ut assumenda ipsa ipsum laboriosam
                      voluptatibus, corrupti inventore iure sint saepe
                      voluptatem magni error aspernatur nesciunt dolor. Odio
                      error incidunt vel corporis? Enim iure natus ipsum odio ad
                      at. Animi ipsam quae et velit recusandae incidunt a sint,
                      eos reprehenderit harum exercitationem explicabo porro
                      repudiandae ratione repellat, nobis maiores distinctio
                      tempore eligendi laboriosam odio blanditiis?
                    </p>
                  </div>

                  <Map />

                  <hr />
                  <div className="pb-[10rem] pt-10">
                    {" "}
                    <h4 className="text-3xl pt-5 flex justify-center uppercase">
                      Comments
                    </h4>
                    <form onSubmit={handleNewCommentSubmit}>
                      <div className="flex justify-between items-center">
                        <div className="hidden md:flex flex-1 items-center gap-2 border p-3 rounded-lg">
                          <input
                            type="text"
                            className="outline-none flex-1 bg-transparent"
                            placeholder="Yorum yazınız !!!"
                            value={newComment}
                            onChange={handleNewCommentChange}
                          />
                        </div>
                        <div>
                          <button
                            className="bg-gega-red w-[70px] h-[53px] ml-2 rounded-[10px]"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="border p-4 rounded-lg mb-4 mt-4 w-1/2"
                      >
                        <div className="grid grid-cols-2">
                          <div className="text-left">
                            <p className="text-lg">{comment.content}</p>
                          </div>
                          <div className="text-right">
                            <button
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                              onClick={() => handleDeleteComment(comment.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
