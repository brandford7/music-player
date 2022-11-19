import React from "react";
import SongList from "./SongList";

const PlaylistComponent = () => {
  return (
    <div className="flex">
      <section>
        <SongList />
      </section>
      <section>My Playlist</section>
    </div>
  );
};

export default PlaylistComponent;
