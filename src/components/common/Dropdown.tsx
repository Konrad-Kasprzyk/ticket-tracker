import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import useClickAlerter from "../hooks/useClickAlerter";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

type Props = {
  icon?: string;
  label?: string;
  arrow?: boolean;
  position?: "left" | "right";
  children?: ReactElement<typeof DropdownItem> | Array<ReactElement<typeof DropdownItem>>;
};

/**
 * If no icon is given, it will render label argument or an empty string in the
 *  dropdown button.
 *
 * @param icon Exported icon like: import dog from "./assets/dog.svg".
 * @param label Text inside dropdown button.
 * @param arrow Render arrow pointing down in dropdown button.
 * @param position Dropdown menu should expand to bottom-left or bottom-right.
 */
function Dropdown({ children, icon, label = "", arrow = false, position = "left" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const isButtonRefClicked = useClickAlerter(ref);
  const [isButtonClickedAgain, setIsButtonClickedAgain] = useState(false);

  useEffect(() => {
    setIsButtonClickedAgain(false);
  }, [isButtonRefClicked]);

  return (
    <>
      <button
        className="DropdownButton"
        ref={ref}
        onClick={() => {
          setIsButtonClickedAgain(!isButtonClickedAgain);
        }}
      >
        {icon ? (
          <img className="DropdownButtonImg" src={icon} alt="dropdown icon" />
        ) : (
          <div className="DropdownButtonLabel">{label}</div>
        )}
      </button>
      {isButtonRefClicked && !isButtonClickedAgain && (
        <div className="DropdownContent">{children}</div>
      )}
    </>
  );
}

export default Dropdown;
