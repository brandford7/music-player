import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import {BiAddToQueue} from 'react-icons/bi'
import MusicButton from "./MusicButton";

const SongList = () => {
  return (
    <div>
      <h1 className="flex items-center space-x-5 text-2xl mb-4">
        <BsFillFileMusicFill />
        Available Songs
      </h1>
      <section>
        <ul className="flex flex-col  text-xl space-y-2">
          <li className="flex items-center cursor-pointer ">
            Orient <MusicButton icon={<BiAddToQueue />} />
          </li>
          <li className="flex items-center cursor-pointer ">
            Winter <MusicButton icon={<BiAddToQueue />} />
          </li>
          <li className="flex items-center cursor-pointer  ">
            Summer
            <div className="space-x-">
              {" "}
              <MusicButton icon={<BiAddToQueue />} />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
