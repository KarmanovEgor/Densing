import { Routes, Route, useLocation } from "react-router-dom";
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
import Coach from "./Coaches/Coach";
import Advance from "./Advance/Advance";
import Slider from "./Slider/Slider";
import Maps from "./Maps/Maps";
import Footer from "./Footer/Footer";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isOpen = isOpenPopup;
  const closePopup = useCallback(() => {
    setIsOpenPopup(false);
  }, [setIsOpenPopup]);
  const openPopup = () => {
    setIsOpenPopup(true);
  };
  const location = useLocation();
  useEffect(() => {
    const handleHit = () => {
      if (window.Ya && window.Ya.Metrika) {
        window.Ya.Metrika.hit(location.pathname, {
          title: document.title,
        });
      }
    };

    // Отправляем данные в Яндекс.Метрику при первом рендере
    handleHit();

    // Обработчик изменения маршрута
    const handleRouteChange = () => {
      handleHit();
    };


    // Отслеживаем события на глобальном уровне
    window.addEventListener('popstate', handleRouteChange);

    // Возвращаем функцию очистки
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [location]);

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



  useEffect(() => {
    const btnHeader = document.querySelectorAll(
      ".header__link, .header__link-main"
    );
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);

      if (location.pathname === '/') {
        // Если маршрут /
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Если маршрут не /
        navigate('/'); // Перенаправляем на /
        setTimeout(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 0); // Небольшая задержка для смены маршрута
      }
    };

    btnHeader.forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    return () => {
      btnHeader.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
    };
  }, [location, navigate]);
  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header
                openPopup={openPopup}
              />
              <Promo />
              <main className="content">
                <Ways handleClick={handleClick} />
                <About />
                <Coaches
                  handleClick={handleClick}
                />
                <Slider />
              </main>
              <Maps handleClick={handleClick} />
              <Footer />
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
                <Way kontemp={kontemp} openPopup={openPopup} />
              </main>
              <Advance />
              <Footer />
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
                <Way stretch={stretch} openPopup={openPopup} />
              </main>
              <Advance />
              <Footer />
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
                <Way actor={actor} openPopup={openPopup} />
              </main>
              <Advance />
              <Footer />
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
                <Way ballet={ballet} openPopup={openPopup} />
              </main>
              <Advance />
              <Footer />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route
          path="/coaches"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Coach openPopup={openPopup} />
              </main>
              <Footer />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
