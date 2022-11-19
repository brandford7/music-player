import React from "react";
import { PlaylistComponent } from "../components";
import {IoMdArrowRoundBack} from 'react-icons/md'

const Playlist = () => {
  return (
    <div className="flex flex-col mx-auto max-w-6xl my-20 space-x-10 bg-gradient-to-r from-green-400 to-blue-500 h-screen">
          <h1 className="text-xl mx-7 my-7"><div><IoMdArrowRoundBack/></div>Create Playlist</h1>
        <section className='p-10'> <PlaylistComponent/></section>
    </div>
  );
};

export default Playlist;
