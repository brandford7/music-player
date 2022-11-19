import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5">Plans</h1>
      <section className="flex space-x-20">
        <div className="space-y-5">
          <Card plan="Basic" number="3" />{" "}
          <button className=" w-auto bg-blue-500 p-5">Choose</button>
        </div>
        <div className="space-y-5">
          <Card plan="Gold" number="5" />{" "}
          <button className=" w-auto bg-blue-500 p-5">Choose Plan</button>
        </div>
      </section>
    </div>
  );
};

export default Plans;
