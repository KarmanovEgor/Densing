import { coachImages } from "../constants/constCoaches";
import './Coaches.css'


export default function Coaches({handleClick}) {

    return(
<section className="coaches page__size">
<h2 className="coaches__title">Тренерский состав</h2>
<div className="coaches__container">
{coachImages.map((item, index) => (
 <div key={index} className="coaches__block"  onClick={() => handleClick(item.way)}>
     <img src={item.img} alt={item.alt} title={item.alt} className="coaches__img" />
     <div className="coaches__block-text">
    <h3 className="coaches__subtitle">{item.title}</h3>
    <p className="coaches__prof">{item.prof}</p>
    </div>
 </div>

))}
</div>
</section>
         
    )
}