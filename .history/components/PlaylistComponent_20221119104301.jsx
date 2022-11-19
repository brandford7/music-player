import React from "react";
import SongList from "./SongList";

const PlaylistComponent = () => {
  return (
    <div className="flex items-center justify-around">
      <section>
        <SongList />
      </section>
      <section>My Playlist</section>
      You have not added an
    </div>
  );
};

export default PlaylistComponent;
