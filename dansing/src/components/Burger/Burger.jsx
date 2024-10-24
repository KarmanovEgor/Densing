import { useState } from "react";
import "./Burger.css";

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <nav className="header__navigation">
      <ul
        className={`header__lists ${
          activeBurger ? "header__lists_active " : ""
        }`}
      >
        <li className="header__links">
          <a href="#main" className="header__link">
            Главная
          </a>
        </li>
        <li className="header__links">
          <a href="#About" className="header__link">
            О школе
          </a>
        </li>
        <li className="header__links">
          <a href="#ways" className="header__link">
            Направления
          </a>
        </li>
        <li className="header__links">
          <a href="#contact" className="header__link">
            Преимущества
          </a>
        </li>
        <li className="header__links">
          <a href="#contact" className="header__link">
            Тренера
          </a>
        </li>
        <li className="header__links">
          <a href="#contact" className="header__link">
            Контакты
          </a>
        </li>
      </ul>
      <div
        className={`header__overlay ${
          activeBurger ? "header__overlay-active" : ""
        }`}
      ></div>
      <div
        onClick={handleClickBurger}
        className={`burger header__button${
          activeBurger ? " burger_active" : ""
        }`}
      >
        <div
          className={`burger-line ${activeBurger ? " burger-first-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-second-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-third-line" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Burger;
