import Link from "next/link";
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
    <div className="flex flex-col space-y-20 bg-blue-400 p-5  w-56">
      <section>
        <h1 className="text-3xl italic">Musix</h1>
      </section>
      <section>
        <h2 className="mb-4 text-2xl">Menu</h2>
        <ul className="space-y-2">
          <li className="flex items-center cursor-pointer ">
            <AiFillHome />
            Home
          </li>
          <li className="flex items-center cursor-pointer ">
            <RiSearchFill />
            Search
          </li>
          <li className="flex items-center cursor-pointer">
            <AiFillHeart />
            Liked Songs
          </li>
          <li className="flex items-center cursor-pointer">
            <MdLibraryMusic />
            Library
          </li>
          <li className="flex items-center cursor-pointer">
            <Link href="/pl">
              <MdLibraryAdd />
              Create Playlist
            </Link>
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
