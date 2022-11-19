import React from "react";

const MusicCard = ({ title }) => {
  return (
    <div className=" flex flex-col p-5 max-w-md rounded-md h-40 w-4/5 bg-silver">
      <section className="bg-green-400"> {title}</section>
    </div>
  );
};

export default MusicCard;
