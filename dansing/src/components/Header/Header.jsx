import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";


export default function Header() {
  const [activeBurger, setActiveBurger] = useState(false);



  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  
  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""}`}
    >
      <div className="header__container">
        <div className="header__link-home"></div>
        <>
          <Burger
            activeBurger={activeBurger}
            handleClickBurger={handleClickBurger}
          />
        </>
  
      </div>
    </header>
  );
}