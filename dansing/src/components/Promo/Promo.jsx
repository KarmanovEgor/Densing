import { Link } from "react-router-dom";
import Messengers from "../Messengers/Messengers";
import "./Promo.css";
import promo1 from '../../images/Promo1.jpg'
import promo2 from '../../images/main4.jpg'

export default function Promo() {
    const phoneNumber = "+79235665373";
  return (
    <section className="promo" id="main">
      <div  className="promo__container page__size">
      <div className="promo__images">
            <img src={promo2} title="Изображение балерины" alt="Изображение балерины"className="promo__img promo__img-left" loading="lazy"></img>
            <img src={promo1} title="Изображение балерины" alt="Изображение балерины"className="promo__img promo__img-right" loading="lazy"></img>
        </div>
        <h1 className="promo__title">ШКОЛА КЛАССИЧЕСКОЙ ХАРЕОГРАФИИ</h1>
        <div className="promo__block-subtitle">
          <p className="promo__text">
            Добро пожаловать в мир классической хореографии и актёрского
            мастерства!
          </p>
          <h2 className="promo__subtitle">В БАРНАУЛЕ</h2>
        </div>
        <ul className="promo__lists">
          <li className="promo__lists-item">КЛАССИЧЕСКАЯ ХАРЕОГРАФИЯ</li>
          <li className="promo__lists-item">СОВРЕМЕННАЯ ХАРЕОГРАФИЯ</li>
          <li className="promo__lists-item">АКТЕРСКОЕ МАСТЕРСТВО</li>
          <li className="promo__lists-item">БАЛЕТ</li>
        </ul>
        <Messengers />

        <div className="promo__block-btn_position">
        <div className="promo__block-btn">
            <p className="promo__block-btn-text">Попробуй себя в танцах!</p>
            <h3 className="promo__block-btn-title">БЕСПЛАТНОЕ
            ПЕРВОЕ ЗАНЯТИЕ!</h3>
     <Link to={`https://wa.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта`}
              className="promo__links"
            >
            Оставить заявку</Link>
        </div>
        </div>
      </div>
    </section>
  );
}
