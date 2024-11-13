import { Link } from "react-router-dom";
import Messengers from "../Messengers/Messengers";
import "./About.css";
import boss from "../../images/boss.jpg";
import imgAbout from "../../images/gallery9.jpg";

export default function About() {
  return (
    <section className="about page__size" id="about">
      <h2 className="about__title">
        Добро пожаловать в школу хореографии «Азбука Балета»
      </h2>
      <div className="about__container">
        <div className="about__block-left">
          <p className="about__text about__text-left">
            Наш филиал,является частью международной сети школы классической
            хореографии “Азбука Балета”, которую объединяет любовь к танцам и
            искусству. Где каждый филиал является частью глобального движения,
            посвящённого популяризации хореографического искусства. Рады
            предложить увлекательные занятия, индивидуальный подход и опытных
            педагогов. Мы создали комфортную атмосферу, чтобы вы и ваши дети
            могли свободно выражать свои эмоции и наслаждаться каждым движением!
          </p>
          <div className="about__part">
            <img
              src={imgAbout}
              alt="руководитель студии"
              title="руководитель студии"
              className="about__img-left"
              loading="lazy"
            />
            <div className="about__part-right">
            <Messengers />
            <Link
              to={`https://docs.google.com/spreadsheets/d/12ATWt7AJBKaPKA98lCGWTwznpuUCNts1/edit?usp=sharing&ouid=107940456394984471908&rtpof=true&sd=true`}
              className="about__links"
            >
              Расписание
            </Link>
              </div>        

          </div>
        </div>
        <div className="about__block-right">
          <img
            src={boss}
            alt="руководитель студии"
            title="руководитель студии"
            className="about__img-right"
            loading="lazy"
          />
          <div className="about__block-text">
            <h3 className="about__subtitle">Ольга</h3>
            <p className="about__text about__text-right">
              Руководитель школы хореографии
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
