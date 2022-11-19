import React from "react";
import { PlaylistComponent } from "../components";
import { IoMdArrowRoundBack } from "react-icons/io";

const Playlist = () => {
    const router =use
  return (
    <div className="flex flex-col mx-auto max-w-6xl my-20 space-x-10 bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <section className="flex">
        <div className="m-4 " onClick={() =>router.back()}>
          <IoMdArrowRoundBack />
        </div>
        <h1 className="text-xl m-7">Create Playlist</h1>
      </section>

      <section className="p-10">
        
        <PlaylistComponent />
      </section>
    </div>
  );
};

export default Playlist;
