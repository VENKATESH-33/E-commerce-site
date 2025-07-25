import React from "react";
import './ReviewCard.css'

function ReviewCard(props) {
  return (
    <div className="w-full p-5 rounded-lg contain-1-3">
      <div>
        <p className="contain-1-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime
          ullam provident ipsum qui, repudiandae vero autem! Ut labore ad dicta,
          natus voluptatum odio unde obcaecati. Quod excepturi tempore nisi?
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="con-3 w-1/4" src={props.img} alt="image"/>
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;
