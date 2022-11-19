import React from "react";
import SongList from "./SongList";

const PlaylistComponent = () => {
  return (
    <div className="flex items-center justify-around">
      <section>
        <SongList />
      </section>
      <section><h2></h2>My Playlist<p></p></section>
     
    </div>
  );
};

export default PlaylistComponent;
