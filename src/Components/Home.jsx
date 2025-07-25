import React from "react";
import Button from "../Layouts/Button"
import './Home.css'

function Home() {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 contain">
      <div className="w-full lg:w-2/3 space-y-5 px-12">
        <h1 className="text-6xl font-semibold contain-1">Elevate Your Inner Foodie with Every Bite.</h1>
        <p className="contain-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id
          dolores possimus cupiditate perspiciatis laboriosam doloribus ratione
          fugit, quaerat nisi.
        </p>
        <div>
            <Button title="Order Now"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
