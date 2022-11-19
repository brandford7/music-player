import React from "react";

const MusicCard = ({ title }) => {
  return (
    <div className=" flex flex-col p-5 max-w-md rounded-md h-40 w-4/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <section className="bg-green-400"> {title}</section>
          <section><MusicButton/></section>
    </div>
  );
};

export default MusicCard;
