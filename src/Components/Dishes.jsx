import React from "react";
import DishesCard from "../Layouts/DishesCard";
import Tastyimg1 from "../assets/tasty-img-1.jpg";
import Tastyimg2 from "../assets/tasty-img-2.jpg";
import Tastyimg3 from "../assets/tasty-img-3.jpg";
import Spicyimg1 from "../assets/spicy-img-1.jpg";
import Spicyimg2 from "../assets/spicy-img-2.jpg";
import Spicyimg3 from "../assets/spicy-img-3.jpg";
import Deliciousimg1 from "../assets/Delicious-img-1.jpg";
import Deliciousimg2 from "../assets/Delicious-img-2.jpg";
import Deliciousimg3 from "../assets/Delicious-img-3.jpg";
import crispyimg1 from "../assets/crispy-img-1.jpg";
import crispyimg2 from "../assets/crispy-img-2.jpg";
import crispyimg3 from "../assets/crispy-img-3.jpg";

function Dishes() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <DishesCard img={Tastyimg1} title="Tasty Dish" price="$10.90" />
        <DishesCard img={Tastyimg2} title="Tasty Dish" price="$20.90" />
        <DishesCard img={Tastyimg3} title="Tasty Dish" price="$40.90" />
        <DishesCard img={Spicyimg1} title="Spicy Dish" price="$10.20" />
        <DishesCard img={Spicyimg2} title="Spicy Dish" price="$19.23" />
        <DishesCard img={Spicyimg3} title="Spicy Dish" price="$15.99" />
        <DishesCard img={Deliciousimg1} title="Delicious Dish" price="$11.90" />
        <DishesCard img={Deliciousimg2} title="Delicious Dish" price="$14.90" />
        <DishesCard img={Deliciousimg3} title="Delicious Dish" price="$12.90" />
        <DishesCard img={crispyimg1} title="Crispy Dish" price="$17.90" />
        <DishesCard img={crispyimg2} title="Crispy Dish" price="$20.90" />
        <DishesCard img={crispyimg3} title="Crispy Dish" price="$18.90" />
      </div>
    </div>
  );
}

export default Dishes;
