import "./Maps.css";
import ya from "../../images/ya.png";
import gis from "../../images/2gis.png";
import Messengers from "../Messengers/Messengers";

export default function Maps({ handleClick }) {
  return (
    <section className="maps">
      <div className="maps__container">
        <iframe
          className="maps__map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acef3ecae3fdc9018a11a9754aca10603f73d52a1e104331181c42490624ef984&amp;source=constructor"
          frameborder="0"
          title="Карта с местоположением"
        ></iframe>
        <div className="maps__block-logo">
          <h3 className="maps__title">Проложить маршрут в (нажмите на иконку):</h3>
          <a
            href="https://yandex.ru/maps/-/CDh~jHPu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ya}
              alt="яндекс картах"
              title="яндекс картах"
              className="maps__logo"
            />
          </a>
          <a
            href="https://go.2gis.com/1u3okb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gis} alt="2гис" title="2гис" className="maps__logo" />
          </a>
        </div>
        <div className="maps__block-contacts" id="contacts">
            <p className="maps__title">Свяжитесь с нами удобным способом:</p>
            <Messengers />
        </div>
      </div>
    </section>
  );
}
