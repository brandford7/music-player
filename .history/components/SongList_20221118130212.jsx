import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import MusicButton from "./MusicButton";

const SongList = () => {
  return (
    <div>
      <h1 className="flex items-center space-x-5 text-2xl mb-4">
        <BsFillFileMusicFill />
        Songs
      </h1>
      <section>
        <ul className="flex flex-col text-xl space-y-2">
          <li className="flex items-center justify-evenly ">
            Orient <MusicButton icon={<AiFillPlayCircle />} />
          </li>
          <li className="flex items-center justify-evenly ">
            Winter <MusicButton icon={<AiFillPlayCircle />} />
          </li>
          <li className="flex items-center justify-evenly ">
            Summer <MusicButton icon={<AiFillPlayCircle />} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
