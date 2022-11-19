import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-20">
      <h1>Music</h1>
      <section>
        <h2>Menu</h2>
        <ul className="">
                  <li>Home</li>
                  <li>Search</li>
                  <li>Liked Songs</li>
                  <li>Library</li>
                  <li>Create Playlist</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
