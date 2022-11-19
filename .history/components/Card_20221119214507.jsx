import React from "react";

const Card = ({plan, number}) => {
  return (
    <div className="flex flex-col items-center h-80 w-60  text-xl border-2 border-indigo-500 ">
          <h1>{plan}</h1>
          <p>{number} songs</p>
    </div>
  );
};

export default Card;
