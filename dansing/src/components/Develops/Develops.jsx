import { useState } from "react";
import "./Develops.css";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dev() {
 const [showIconsKarmanov, setShowIconsKarmanov] = useState(false);


  const toggleIconsKarmanov = () => {
    setShowIconsKarmanov(!showIconsKarmanov);

  };

  const phoneNumber1 = "+79384668988";

  return (
    <section className="dev">
    <div className="dev__developers">
      <div className="dev__developer">
        <p className="dev__hoverable" onClick={toggleIconsKarmanov}>the website was developed by Karmanov</p>
        {showIconsKarmanov && (
          <div className="dev__links">
            <Link to={`https://t.me/${phoneNumber1}?text=Здравствуйте,пишу с вашего сайта Пречистенка`} className="dev__link">
              <FaTelegram /> Go to Telegram
            </Link>
            <Link
              to={`https://wa.me/${phoneNumber1}?text=Здравствуйте,пишу с вашего сайта Пречистенка`}
              className="dev__link"
            >
              <FaWhatsapp /> Go to WhatsApp
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
  );
}
