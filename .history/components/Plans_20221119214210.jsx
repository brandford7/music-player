import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1>Plans</h1>
      <section className='flex space-x-20'>
        <Card plan='Basic' songs='3' />
        <Card plan='Gold' songs='5'/>
      </section>
    </div>
  );
};

export default Plans;
