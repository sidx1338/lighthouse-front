import './LightHouseImages.scss'

import image1 from '../../assets/images/lighthouse-image2.jpg'
import image2 from '../../assets/images/lighthouse-image3.jpg'
import image3 from '../../assets/images/lighthouse-image4.jpg'
import image4 from '../../assets/images/lighthouse-image5.jpg'
import image5 from '../../assets/images/lighthouse-image6.jpg'
import image6 from '../../assets/images/lighthouse-image7.jpg'
import image7 from '../../assets/images/lighthouse-image8.jpg'
import image8 from '../../assets/images/lighthouse-image9.jpg'
import FullScreenImagesComp from "../FullScreenImagesComp/FullScreenImagesComp.jsx";

const imageData = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
];

const LightHouseImages = () => (
    <div className="comp-image-grid__container">
        <FullScreenImagesComp images={imageData}/>
        {/*{imageData.map((image, index) => (*/}
        {/*    <div className="comp-image-item" key={index}>*/}
        {/*        <img src={image.src} alt='image' className="comp-image"/>*/}
        {/*    </div>*/}
        {/*))}*/}
    </div>
);

export default LightHouseImages;
