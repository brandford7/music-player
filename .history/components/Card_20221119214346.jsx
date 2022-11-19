import React from "react";

const Card = ({plan, songs}) => {
  return (
    <div className="flex flex-col justify-center h-80 w-60 p-5 text-xl border-2 border-indigo-500 ">
          <h1>{plan}</h1>
          <p>{songs}</p>
    </div>
  );
};

export default Card;
