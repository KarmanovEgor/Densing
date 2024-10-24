import { FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Messengers.css';

export default function Messengers () {
    const phoneNumber = "+79039960767";

    return (
<ul className="messengers">
          <li className="messengers__contact">
            <Link to={`tel:${phoneNumber}`} className="messengers__links">
              <FaPhone className="messengers__icon"/> Телефон
            </Link>
          </li>
          <li className="messengers__contact">
            <Link
              to={`https://t.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта`}
              className="messengers__links"
            >
              <FaTelegram className="messengers__icon" />Телеграмм
            </Link>
          </li>
          <li className="messengers__contact">
            <Link
              to={`https://wa.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта`}
              className="messengers__links"
            >
              <FaWhatsapp className="messengers__icon" /> Whatsapp
            </Link>
          </li>
        </ul>
    )
}