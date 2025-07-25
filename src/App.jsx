import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Dishes from "./Components/Dishes"
import About from "./Components/About";
import Menu from "./Components/Menu";
import Reviews from "./Components/Reviews"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="dishes">
          <Dishes/>
        </div>

        <div id="about">
          <About />
        </div>

        <div id="menu">
          <Menu/>
        </div>

        <div id="reviews">
          <Reviews/> 
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
