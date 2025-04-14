import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={previousImage}>
        &#10094;
      </button>
      <div className="carousel-image-container">
        <img 
          src={images[currentIndex]} 
          alt={`Project image ${currentIndex + 1}`} 
          className="carousel-image"
        />
        <div className="gradient-corner top-left"></div>
        <div className="gradient-corner top-right"></div>
        <div className="gradient-corner bottom-left"></div>
        <div className="gradient-corner bottom-right"></div>
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel; 