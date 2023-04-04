import './GalleryCarousel.scss'
import React, { useState, useEffect } from 'react';

function Carousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const getTranslateX = (index) => {
    if (index === activeIndex) {
      return 0;
    } else if (index > activeIndex) {
      return '100%';
    } else {
      return '-100%';
    }
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
      <div className="button-container">
        <button className="carousel-prev" onClick={handlePrevClick}>
                  &lt;
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
            &gt;
        </button>  
      </div>
        {images.map((image, index) => (
          <div
            key={image.name}
            className={`carousel-event ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${getTranslateX(index)})` }}
          >
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${image.image})` }}
            />
            <div className="carousel-details">
              <h3>{image.name}</h3>
              <p>{image.description}</p>
              <p>{image.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;