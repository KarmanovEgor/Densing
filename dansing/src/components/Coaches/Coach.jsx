import { coachImages } from "../constants/constCoaches"
import './Coach.css'

export default function Coach(){

    return(
<section className="coach page__size">
    <div className="coach__container">
    <h2 className="coach__title">Наши преподаватели</h2>
    <div className="coach__cards">
       {coachImages.map((item, index) =>( <div className="coach__card" key={index}>
            <img src={item.img} alt={item.alt} title={item.alt} className="coach__img" />
            <div className="coach__block-text">
                <h3 className="coach__name">{item.title}</h3>
                <p className="coach__prof">{item.prof}</p>
                <ul className="coach__text">
                                {item.text.map((textItem, textIndex) => (
                                    <li className="coach__text-list" key={textIndex}>
                                        {textItem.itm}  
                                    </li>
                                ))}
                            </ul>
            </div>
        </div>
        ))}
    </div>
    </div>
</section>

    )
}
