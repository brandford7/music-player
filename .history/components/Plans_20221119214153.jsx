import React from "react";
import Card from "./Card";

const Plans = () => {
  return (
    <div>
      <h1>Plans</h1>
      <section className='flex space-x-20'>
        <Card plan='Basic' songs='' />
        <Card plan='Gold'/>
      </section>
    </div>
  );
};

export default Plans;
