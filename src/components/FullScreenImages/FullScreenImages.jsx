import React, { useState } from 'react';
import './FullScreenImages.scss'
import Cross from "../../assets/icons/cross.svg"

const FullScreenImages = ({ images }) => {
    const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

    const openFullscreen = (index) => {
        setFullscreenImageIndex(index);
    };

    const closeFullscreen = (event) => {
        if (!event.target.classList.contains('fullscreen-image')) {
            setFullscreenImageIndex(null);
        }
    };

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        onClick={() => openFullscreen(index)}
                    />
                ))}
            </div>
                <div className={`fullscreen-overlay ${fullscreenImageIndex !== null && 'open'}`} onClick={closeFullscreen}>
                    <img src={Cross} className="close-button"/>
                    <img className="fullscreen-image" src={images[fullscreenImageIndex]} alt="" />
                </div>
        </div>
    );
};

export default FullScreenImages;
