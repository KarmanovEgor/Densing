import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({handleNavigateAndScroll}) {
  const [activeBurger, setActiveBurger] = useState(false);

  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""}`}
    >
      <div className="header__container">
        <div className="header__block">
          <Link to='/' className="header__link-home"></Link>
          <a href="#main" className="header__link-main" >
            Главная
          </a>
        </div>
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
