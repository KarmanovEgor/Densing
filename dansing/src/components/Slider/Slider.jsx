import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import gallery from '../../images/gallery.jpg';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';
import gallery7 from '../../images/gallery7.jpg';
import gallery8 from '../../images/gallery8.jpg';
import gallery9 from '../../images/gallery9.jpg';
import gallery10 from '../../images/gl1.jpg';
import gallery11 from '../../images/gl2.jpg';
import gallery12 from '../../images/gl3.jpg';
import gallery13 from '../../images/gl4.jpg';

const Slider = () => {
  const images = [
    gallery,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
  ];

  const [offset, setOffset] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // По умолчанию 4 изображения

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 700) {
        setSlidesToShow(1); // При ширине <= 700px показывать 1 изображение
      } else {
        setSlidesToShow(4); // В противном случае показывать 4 изображения
      }
    };

    updateSlidesToShow(); // Установить начальное значение

    window.addEventListener('resize', updateSlidesToShow); // Обновление при изменении размера окна

    return () => window.removeEventListener('resize', updateSlidesToShow); // Очистка события
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % images.length);
    }, 1600); // Меняю изображение каждые 1600 мс

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider page__size" id='gallery'>
      <div className="slider__container">
        <h2 className="slider__title">Фотогалерея</h2>
        <div className="slider-wrapper" style={{ transform: `translateX(-${(offset * 100) / slidesToShow}%)` }}>
          {images.map((image, index) => (
            <div className="slider__imgs" key={index}>
              <img src={image} alt={`изображение студии балета ${index}`} className='slider__img'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
