import React from 'react';
import './CategoryCard.scss'

import image1 from '../../assets/category-images/chandelier.png'
import image2 from '../../assets/category-images/street-lights.png'
import image3 from '../../assets/category-images/desk-lamp.png'
import image4 from '../../assets/category-images/bra.png'
import image5 from '../../assets/category-images/lamp.png'
import image6 from '../../assets/category-images/floor-lamp.png'
import image7 from '../../assets/category-images/lamps.png'
import image8 from '../../assets/category-images/spots.png'

const imageData = [
    { src: image1, title: 'Люстры' },
    { src: image2, title: 'Уличное освещение' },
    { src: image3, title: 'Настольные лампы' },
    { src: image4, title: 'Бра' },
    { src: image5, title: 'Светильники' },
    { src: image6, title: 'Торшеры' },
    { src: image7, title: 'Лампочки' },
    { src: image8, title: 'Споты' },
];

const ImageGridComponent = () => (
    <div className="image-grid__container">
        {imageData.map((image, index) => (
            <div className="image-item" key={index}>
                <img src={image.src} alt='image' className="image" />
                <div className="image-title"><span>{image.title}</span></div>
            </div>
        ))}
    </div>
);

export default ImageGridComponent;
