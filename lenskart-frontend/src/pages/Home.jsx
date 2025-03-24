import SecondCarousel from "../components/Home/secondCarousel/SecondCarousel";
import FirstCarousel from "../components/Home/firstCarousel/FirstCarousel";
import React from "react";
import "./home.css"

function Home() {
  return (
    <div className="home">
      <FirstCarousel />
      <SecondCarousel />
    </div>
  );
}

export default Home;
