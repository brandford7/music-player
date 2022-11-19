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
    <div className="flex flex-col space-y-20 bg-blue-400 p-5  w-56 h-screen">
      <section>
        <h1 className="text-3xl italic">Musix</h1>
      </section>
      <section>
        <h2 className="mb-4 text-2xl">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center cursor-pointer ">
              <AiFillHome />
              Home
            </Link>
          </li>

          <li className="flex items-center cursor-pointer">
            <Link
              href="/library"
              className="flex items-center cursor-pointer "
            >
              <MdLibraryMusic />
              Library
            </Link>
          </li>
          <li>
            <Link
              href="/playlist"
              className="flex items-center cursor-pointer "
            >
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
            <MdSubscriptions />
            Subscription
          </li>
          <li className="flex items-center ">
          <Link
              href="/playlist"
              className="flex items-center cursor-pointer "
            ></Link>    <MdLogout />
            Log Out
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
