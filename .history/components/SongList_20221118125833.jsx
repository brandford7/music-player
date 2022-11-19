import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import MusicButton from "./MusicButton";

const SongList = () => {
  return (
    <div>
      <h1 className="flex items-center space-x-5 text-2xl">
        <BsFillFileMusicFill />
        Songs
      </h1>
      <section>
        <ul className="flex flex-col text-xl space-y-2">
          <li className="flex items-center ">
            Orient <MusicButton icon={<AiFillPlayCircle />} />
          </li>
          <li className="flex items-center ">Winter</li>
          <li>Summer</li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
