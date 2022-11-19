import React from "react";

const Card = ({plan, songs}) => {
  return (
    <div className="flex fle justify-center h-40 w-auto p-5 text-xl border-2 border-indigo-500 ">
          <h1>{plan}</h1>
          <p>{songs}</p>
    </div>
  );
};

export default Card;
