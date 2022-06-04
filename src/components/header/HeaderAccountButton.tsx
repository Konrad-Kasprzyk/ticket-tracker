import React from "react";
import account from "../../assets/account.svg";
import Dropdown from "../common/Dropdown";
import DropdownItem from "../common/DropdownItem";
import "./HeaderAccountButton.css";

function NavbarAccountButton() {
  return (
    <div className="HeaderAccountButton">
      <Dropdown icon={account} expandTo="left">
        <DropdownItem label="link 1" />
        <DropdownItem label="link 2" />
      </Dropdown>
    </div>
  );
}

export default NavbarAccountButton;
