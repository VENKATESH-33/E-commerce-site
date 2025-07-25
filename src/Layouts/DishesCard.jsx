// import { Button } from "bootstrap";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../Layouts/Button";
import "./DishesCard.css"

function DishesCard(props) {
  return (
    <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 rounded-lg card-con-1">
      <img className="rounded-xl contain-1-2" src={props.img} alt="image" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="contain-1-1" />
          <BsStarFill className="contain-1-1" />
          <BsStarFill className="contain-1-1" />
          <BsStarFill className="contain-1-1" />
          <BsStarHalf className="contain-1-1" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
}

export default DishesCard;
