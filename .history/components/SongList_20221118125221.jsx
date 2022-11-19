import React from "react";
import { BsFillFileMusicFill } from "react-icons/bs";

const SongList = () => {
  return (
    <div>
      <h1>Songs</h1>
      <section>
        <ul className="flex flex-col">
          <li>
            <BsFillFileMusicFill />
            Orient
          </li>
          <li>
            <BsFillFileMusicFill />
            Winter
          </li>
          <li>
            <BsFillFileMusicFill />
            Summer
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SongList;
