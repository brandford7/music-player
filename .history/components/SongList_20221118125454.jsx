import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";

const SongList = () => {
  return (
    <div>
      <h1 className="flex items-center space-x-5 text-2xl">
        <BsFillFileMusicFill />
        Songs
      </h1>
      <section>
        <ul className="flex flex-col text-xl space-y-2">
          <li>Orient <MusicButton</li>
          <li>Winter</li>
          <li>Summer</li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
