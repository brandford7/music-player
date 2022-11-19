import React from "react";
import SongList from "./SongList";

const PlaylistComponent = () => {
  return (
    <div className="flex">
      <section>
        <SongList />
      </section>
      <section>MY pLAYLIST</section>
    </div>
  );
};

export default PlaylistComponent;
