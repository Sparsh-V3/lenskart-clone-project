import SecondCarousel from "../../components/HomeComponents/secondCarousel/SecondCarousel";
import FirstCarousel from "../../components/HomeComponents/firstCarousel/FirstCarousel";
import React from "react";
import "./home.css";
import Component3 from "../../components/HomeComponents/component-3/Component3";
import Component4 from "../../components/HomeComponents/component-4/Component4";

function Home() {
  return (
    <div className="home">
      <FirstCarousel />
      <SecondCarousel />
      <Component3 />
      <Component4 />
    </div>
  );
}

export default Home;
