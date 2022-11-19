import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import {}
import MusicButton from "./MusicButton";

const SongList = () => {
  return (
    <div>
      <h1 className="flex items-center space-x-5 text-2xl mb-4">
        <BsFillFileMusicFill />
        Available Songs
      </h1>
      <section>
        <ul className="flex flex-col items-center text-xl space-y-2">
          <li className="flex items-center  ">
            Orient <MusicButton icon={<AiFillPlayCircle />} />
          </li>
          <li className="flex items-center justify-around ">
            Winter <MusicButton icon={<AiFillPlayCircle />} />
          </li>
          <li className="flex items-center justify-around ">
            Summer <MusicButton icon={<AiFillPlayCircle />} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
