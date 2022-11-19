import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5">Plans</h1>
      <section className="flex space-x-20">
        <div className="space-y-5">
          <Card plan="Basic" number="3" />{" "}
          <button className=" p-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
            Choose Plan
          </button>
        </div>
        <div className="space-y-5">
          <Card plan="Gold" number="5" />{" "}
          <button className=" flex justify-cent p-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
            Choose Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default Plans;
