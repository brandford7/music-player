import React from "react";
import { AiFillHome, AiFillHeart, AiFillSetting } from "react-icons/ai";
import {
  MdLibraryMusic,
  MdLibraryAdd,
  MdLogout,
  MdSubscriptions,
} from "react-icons/md";
import { RiSearchFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-20 bg-gradient-to-r from-indigo-500 w-40">
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
            <RiSearchFill />
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
          <li className="flex items-center ">
            <AiFillSetting />
            Settings
          </li>
          <li className="flex items-center ">
            <MdSubscriptions />
            Subscription
          </li>
          <li className="flex items-center ">
            <MdLogout />
            Log Out
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
