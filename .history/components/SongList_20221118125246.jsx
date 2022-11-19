import React from "react";
import {BsFillFileMusicFill} from "react-icons/bs"

const SongList = () => {
  return (
    <div>
      <h1>
        <BsFillFileMusicFill />
        Songs
      </h1>
      <section>
        <ul className="flex flex-col">
          <li>Orient</li>
          <li>
            <BsFillFileMusicFill />
            Winter
          </li>
          <li>Summer</li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
