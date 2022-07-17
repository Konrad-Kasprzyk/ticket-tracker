import React from "react";
import "./DropdownItem.css";

function DropdownItem({ icon, label = "" }: { icon?: string; label?: string }) {
  return (
    <div className="DropdownItem">
      {icon ? (
        <img className="DropdownItemImg" src={icon} alt="dropdown icon" />
      ) : (
        <div className="DropdownItemLabel">{label}</div>
      )}
    </div>
  );
}
export default DropdownItem;
