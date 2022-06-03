import React from "react";
import account from "../../assets/account.svg";
import Dropdown from "../common/Dropdown";
import "./HeaderAccountButton.css";

function NavbarAccountButton() {
  return (
    <div className="HeaderAccountButton">
      <Dropdown icon={account}>
        <div>cos</div>
        <div>cos2</div>
      </Dropdown>
    </div>
  );
}

export default NavbarAccountButton;
