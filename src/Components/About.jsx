import React from "react";
import about from "../assets/menu-img-3.jpg";
// import { Button } from 'bootstrap';
import Button from "../Layouts/Button";
import "./About.css";

function About() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-7 md:gap-14 sm:gap-12 about-con-1">
      <img src={about} alt="image" className="w-70 contain-1" />
      <div className="space-y-4 lg:pt-2 ps-12 lg:w-2/3 md:w-180">
        <h1 className="font-semibold text-6xl md:text-center flex items-start justify-start">
          Why Choose Us?
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          exercitationem et omnis, nobis hic possimus cupiditate est minus
          doloremque voluptates, dignissimos expedita quas autem eius
          consectetur, commodi molestiae sit reiciendis.
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          nisi non obcaecati cum dolor. At ipsa necessitatibus facilis
          laudantium cupiditate libero temporibus pariatur quis, quibusdam
          dolore sequi exercitationem quisquam possimus.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default About;
