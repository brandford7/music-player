import React from "react";
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { MdLibraryMusic, MdLibraryAdd } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-20">
      <section>
        <h1 className="text-3xl italic">Musix</h1>
      </section>
      <section>
        <h2 className="mb-4 text-2xl">Menu</h2>
        <ul className="space-y-2">
          <li className="flex items-center ">
            <AiFillHome />
            Home
          </li>
          <li className="flex items-center ">
            <AiOutlineSearch />
            Search
          </li>
          <li className="flex items-center ">
            <AiFillHeart />
            Liked Songs
          </li>
          <li className="flex items-center ">
            <MdLibraryMusic />
            Library
          </li>
          <li className="flex items-center ">
            <MdLibraryAdd />
            Create Playlist
          </li>
        </ul>
      </section>
      <section>
        <h2 className="mb-4 text-2xl">General</h2>
        <ul className="space-y-2">
          <li></li>
          <li>Search</li>
          <li>Liked Songs</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
