import React from "react";
import { LibraryComponent } from "../components";

const Library = () => {
  return (
    <div className="flex mx-auto max-w-6xl my-20 space-x-10 h-screen p-10 bg-gradient-to-r from-green-400 to-blue-500">
      <LibraryComponent />
    </div>
  );
};

export default Library;
