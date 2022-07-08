import React, { useState, useEffect, useRef } from "react";
import "./Accord.css";
import Chevron from "./chevron.svg";

function Accord() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  const toggleState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="accord">
      <div onClick={toggleState} className="accord-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="chevron-down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? "accord-toggle animated" : "accord-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          pariatur. Libero quod facere cumque nostrum ipsum temporibus incidunt
          corporis quibusdam doloremque reiciendis possimus, rem, molestiae
          vitae neque, ex veritatis nulla?
        </p>
      </div>
    </div>
  );
}

export default Accord;
