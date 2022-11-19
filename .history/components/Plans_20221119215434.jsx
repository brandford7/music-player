import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1 className="text-2xl mb-5">Plans</h1>
      <section className='flex space-x-20'>
        <Card plan='Basic' number='3' />
        <Card plan='Gold' number='5'/>
      </section>
      <button className="rounded-">Choose</button>
    </div>
  );
};

export default Plans;
