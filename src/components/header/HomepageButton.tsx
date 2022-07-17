import React from "react";
import homepage from "../../assets/homepage.svg";
import "./HomepageButton.css";

function HomepageButton() {
  return (
    <button className="HomepageButton">
      <img className="HomepageImg" src={homepage} alt="homepage" />
    </button>
  );
}

export default HomepageButton;
