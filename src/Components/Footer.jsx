import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="rounded-t-3xl mt-8 md:mt-0 px-5 contain-1-5">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 mt-10">
          <h1 className="font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each place is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a className="con-4 transition-all cursor-pointer" href="/">
              Dishes
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              About
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              Menu
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a className="con-4 transition-all cursor-pointer" href="/">
              Our Dishes
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a className="con-4 transition-all cursor-pointer" href="/">
              FoodieWeb@email.com
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              +64 958 248 966
            </a>
            <a className="con-4 transition-all cursor-pointer" href="/">
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <p className="text-center py-4">
          @copyright developed by 
         <span className="con-5"> champion programmers</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
