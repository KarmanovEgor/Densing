import { Link, useLocation } from "react-router-dom";
import "./Way.css"


export default function Way({ kontemp, stretch, actor, ballet }) {
  const location = useLocation();

  // Создаем объект для сопоставления путей и данных
  const dataMap = {
    "/kontemp": kontemp,
    "/stretch": stretch,
    "/actor": actor,
    "/ballet": ballet,
  };

  // Получаем данные в зависимости от текущего пути
  const data = dataMap[location.pathname] || {}; // Значение по умолчанию
// Проверяем наличие данных
if (!data || !data.age || data.age.length === 0) {
  return null; // Возвращаем null, если данные не доступны
}

const hasPriceDataChild = data.priceChild && data.priceChild.length > 0;
const hasPriceDataAdult = data.priceAdult && data.priceAdult.length > 0;

return (
  <section className="way page__size">
    <div className="way__container">
      <h2 className="way__title">{data.title}</h2>
      <div className="way__block-up">
        <img
          src={data.image}
          alt={data.alt}
          title={data.alt}
          className="way__img"
          loading="lazy"
        />
        <p className="way__text">{data.subtitle}</p>
      </div>
      <div className="way__block-middle">
        <h3 className="way__subtitle">{data.ageTitle}</h3>
        <div className="way__items">
          {data.age.map((item, index) => (
            <div key={index} className="way__item">
              <h3 className="way__age-title">{item.name}</h3>
              <p className="way__age">{item.age}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="way__block-down">
        {hasPriceDataChild && (
          <>
            <h3 className="way__subtitle">{data.priceTitleChild}</h3>
            <div className="way__items">
              {data.priceChild.map((item, index) => (
                <div key={index} className="way__item">
                  <h3 className="way__age-title">{item.during}</h3>
                  <p className="way__age">{item.coast}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {hasPriceDataAdult && (
          <>
            <h3 className="way__subtitle">{data.priceTitleAdult}</h3>
            <div className="way__items">
              {data.priceAdult.map((item, index) => (
                <div key={index} className="way__item">
                  <h3 className="way__age-title">{item.during}</h3>
                  <p className="way__age">{item.coast}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Link
        to={`https://docs.google.com/spreadsheets/d/12ATWt7AJBKaPKA98lCGWTwznpuUCNts1/edit?usp=sharing&ouid=107940456394984471908&rtpof=true&sd=true`}
        className="about__links"
      >
        Расписание
      </Link>
    </div>
  </section>
);
}