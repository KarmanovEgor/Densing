import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Promo from "./Promo/Promo";
import Ways from "./Ways/Ways";
import About from "./About/About";

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
                <Ways />
                <About />
              </main>
              {/* <Footer /> */}
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
