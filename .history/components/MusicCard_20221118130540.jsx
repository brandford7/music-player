import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";
import MusicButton from "./MusicButton";
import {
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";

const MusicCard = ({ title }) => {
  return (
    <div className=" flex flex-col items-center space-y-5 p-5 max-w-md rounded-md h-40 w-4/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <section className="flex items-center justify-center rounded-full h-2/4 w-2/3 bg-black text-white">
       < BsFillFileMusicFill
              {title}
      </section>
      <section className="flex items-center justify-center text-2xl">
        <MusicButton icon={<AiFillStepBackward />} />
        <MusicButton icon={<AiFillPlayCircle />} />
        <MusicButton icon={<AiFillStepForward />} />
      </section>
    </div>
  );
};

export default MusicCard;
