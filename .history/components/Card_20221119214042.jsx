import React from "react";

const Card = ({plan, songs}) => {
  return (
    <div className="flex justify-center h-40 w-auto p-5 text-xl border-2 border-indigo-500 ">
      {plan}
    </div>
  );
};

export default Card;
