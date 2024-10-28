import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Promo from "./Promo/Promo";
import Ways from "./Ways/Ways";
import About from "./About/About";
import Coaches from "./Coaches/Coaches";
import Way from "./Ways/Way";
import { actor, ballet, kontemp, stretch } from "./constants/constWays";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isOpen = isOpenPopup;
  const closePopup = useCallback(() => {
    setIsOpenPopup(false);
  }, [setIsOpenPopup]);
  const openPopup = () => {
    setIsOpenPopup(true);
  };
  // Находим элемент, к которому нужно прокрутить
  useEffect(() => {
    const btnHeader = document.querySelectorAll(".header__link");

    btnHeader.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const section = document.getElementById(targetId);
        section.scrollIntoView({ behavior: "smooth" });
      });
    });

    return () => {
      btnHeader.forEach((btn) => {
        btn.removeEventListener("click", (e) => {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1);
          const section = document.getElementById(targetId);
          section.scrollIntoView({ behavior: "smooth" });
        });
      });
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [isOpen, closePopup]);

  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header openPopup={openPopup} />
              <Promo />
              <main className="content">
                <Ways handleClick={handleClick}/>
                <About />
                <Coaches />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
          
        ></Route>
         <Route
  path="/kontemp"
  element={
    <>
      <Header openPopup={openPopup} />
      <main className="content">
        <Way 
          kontemp={kontemp} 
          openPopup={openPopup} 
        />
      </main>
      <Popup isOpen={isOpenPopup} onClose={closePopup} />
    </>
  }
/>
<Route
  path="/stretch"
  element={
    <>
      <Header openPopup={openPopup} />
      <main className="content">
        <Way 
          stretch={stretch} 
          openPopup={openPopup} 
        />
      </main>
      <Popup isOpen={isOpenPopup} onClose={closePopup} />
    </>
  }
/>
<Route
  path="/actor"
  element={
    <>
      <Header openPopup={openPopup} />
      <main className="content">
        <Way 
          actor={actor} 
          openPopup={openPopup} 
        />
      </main>
      <Popup isOpen={isOpenPopup} onClose={closePopup} />
    </>
  }
/>
<Route
  path="/ballet"
  element={
    <>
      <Header openPopup={openPopup} />
      <main className="content">
        <Way 
          ballet={ballet} 
          openPopup={openPopup} 
        />
      </main>
      <Popup isOpen={isOpenPopup} onClose={closePopup} />
    </>
  }
/>
      </Routes>
    </div>
  );
}

export default App;
