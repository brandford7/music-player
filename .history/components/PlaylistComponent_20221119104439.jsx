import React from "react";
import SongList from "./SongList";

const PlaylistComponent = () => {
  return (
    <div className="flex items-center justify-around">
      <section>
        <SongList />
      </section>
      <section>
        <h2 className="text-2xl">My Playlist</h2>
        <p> You have not added any song to your playlist</p>
      </section>
    </div>
  );
};

export default PlaylistComponent;
