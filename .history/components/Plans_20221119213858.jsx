import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1>Plans</h1>
      <section className='flex space-y-20'>
        <Card />
        <Card/>
      </section>
    </div>
  );
};

export default Plans;
