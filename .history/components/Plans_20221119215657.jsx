import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5">Plans</h1>
      <section className="flex space-x-20">
        <div>
          {" "}
          <Card plan="Basic" number="3" />{" "}
          <button className=" w-40 bg-blue-500 p-5">Choose</button>
        </div>
       <div> <Card plan="Gold" number="5" /></div>
      </section>
    </div>
  );
};

export default Plans;
