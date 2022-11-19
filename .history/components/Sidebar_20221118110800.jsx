import React from "react";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-20">
      <section>
        <h1 className="text-xl">Music</h1>
      </section>
      <section>
        <h2>Menu</h2>
        <ul className="">
          <li className="flex items-center ">
            <AiFillHome />
            Home
          </li>
          <li className="flex items-center ">Search</li>
          <li className="flex items-center ">Liked Songs</li>
          <li className="flex items-center ">Library</li>
          <li className="flex items-center ">Create Playlist</li>
        </ul>
      </section>
      <section>
        <h2>General</h2>
        <ul className="">
          <li>Home</li>
          <li>Search</li>
          <li>Liked Songs</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
