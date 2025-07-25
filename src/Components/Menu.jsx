import React from "react";
import DishesCard from "../Layouts/DishesCard";
import Deliciousimg1 from "../assets/Delicious-img-1.jpg";
import Deliciousimg2 from "../assets/Delicious-img-2.jpg";
import Deliciousimg3 from "../assets/Delicious-img-3.jpg";

function Menu() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium Menu</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={Deliciousimg1} title="Delicious Dish" price="$16.99" />
        <DishesCard img={Deliciousimg2} title="Delicious Dish" price="$18.99" />
        <DishesCard img={Deliciousimg3} title="Delicious Dish" price="$17.99" />
      </div>
    </div>
  );
}

export default Menu;
