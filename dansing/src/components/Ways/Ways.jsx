
import { waysImages } from "../constants/constWays";
import "./Ways.css";


export default function Ways({handleClick}) {

  return (
    <section className="ways page__size">
      <div className="ways__container">
        <div className="ways__grid">
          {waysImages.map((ways, index) => (
            <div key={index} className="ways__grid_item">
              <h3
                className="ways__title"
                onClick={() => handleClick(ways.way)}
              >
                {ways.text}
              </h3>
              <img
                className="ways__imgs ways__img"
                title={ways.alt}
                alt={ways.alt}
                src={ways.img}
                onClick={() => handleClick(ways.way)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
