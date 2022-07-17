import React from "react";
import HeaderAccountButton from "../components/header/HeaderAccountButton";
import HomepageButton from "../components/header/HomepageButton";
import Navbar from "../components/header/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <HomepageButton />
      <Navbar />
      <HeaderAccountButton />
    </header>
  );
}

export default Header;
