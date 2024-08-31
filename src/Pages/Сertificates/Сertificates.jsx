import React from "react";
import './Certificates.scss';
import FullScreenImages from "../../components/FullScreenImages/FullScreenImages.jsx";

import image1 from '../../assets/certificates/01.jpg'
import image2 from '../../assets/certificates/02.jpg'
import image3 from '../../assets/certificates/03.jpg'
import image4 from '../../assets/certificates/04.jpg'
import image5 from '../../assets/certificates/05.jpg'
import image6 from '../../assets/certificates/06.jpg'
import image7 from '../../assets/certificates/07.jpg'
import image8 from '../../assets/certificates/08.jpg'
import image9 from '../../assets/certificates/09.jpg'
import image10 from '../../assets/certificates/10.jpg'
import image11 from '../../assets/certificates/11.jpg'
import image12 from '../../assets/certificates/12.jpg'
import image13 from '../../assets/certificates/13.jpg'
import image14 from '../../assets/certificates/14.jpg'
import image15 from '../../assets/certificates/15.jpg'
import image16 from '../../assets/certificates/16.jpg'
import image17 from '../../assets/certificates/17.jpg'
import image18 from '../../assets/certificates/18.jpg'
import image19 from '../../assets/certificates/19.jpg'
import image20 from '../../assets/certificates/20.jpg'
import image21 from '../../assets/certificates/21.jpg'
import image22 from '../../assets/certificates/22.jpg'
import image23 from '../../assets/certificates/23.jpg'
import image24 from '../../assets/certificates/24.jpg'
import image25 from '../../assets/certificates/25.jpg'
import image26 from '../../assets/certificates/26.jpg'
import image27 from '../../assets/certificates/27.jpg'
import image28 from '../../assets/certificates/28.jpg'
import image29 from '../../assets/certificates/29.jpg'
import image30 from '../../assets/certificates/30.jpeg'
//import image31 from '../../assets/certificates/31.jpeg'
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";



const certificatesEglo1 = [
    image1,
    image2,
    ];
const certificatesEglo2 = [
    image3,
    image4,
    image5,
];
const certificatesLightStar1 = [
    image6,
    ];
const certificatesLightStar2 = [
    image7,
    ];
const certificatesNovotech = [
    image8,
    image9,
    ];
const certificatesMantra1 = [
    image10,
    image11,
    image12,
    ];
const certificatesMantra2 = [
    image13,
    image14,
    image15,
    ];
const certificatesStLuce1 = [
    image16,
    ];
const certificatesStLuce2 = [
    image17,
    ];
const certificatesOdeonLight = [
    image18,
    image19,
    ];
const certificatesMaytoni1 = [
    image20,
    image21,
    image22,
    ];
const certificatesMaytoni2 = [
    image23,
    image24,
    image25,
    ];
const certificatesSonex = [
    image26,
    image27,
    image28,
    ];
const certificatesIveleCrystal = [
    image29,
    image30,
    ];


const Certificates = () => {
    return (
        <div>
            <div className="certificates-top-background"/>
            <Header/>
                <div className="certificates--title">СЕРТИФИКАТЫ</div>
                <div className="certificates-mid-background">
                    <div className="certificates__container">
                        <div>
                            <div className="certificates--name">Лампы светодиодные Eglo</div>
                            <FullScreenImages images={certificatesEglo1} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники Eglo</div>
                            <FullScreenImages images={certificatesEglo2} />
                        </div>
                        <div>
                            <div className="certificates--name">Настольные лампы, торшеры под лампы накаливания LightStar</div>
                            <FullScreenImages images={certificatesLightStar1} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники, люстры, бра, подвесы под лампы накаливания LightStar</div>
                            <FullScreenImages images={certificatesLightStar2} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники Novotech</div>
                            <FullScreenImages images={certificatesNovotech} />
                        </div>
                        <div>
                            <div className="certificates--name">Стационарные светильники Mantra</div>
                            <FullScreenImages images={certificatesMantra1} />
                        </div>
                        <div>
                            <div className="certificates--name">Переносные светильники Mantra</div>
                            <FullScreenImages images={certificatesMantra2} />
                        </div>
                        <div>
                            <div className="certificates--name">Переносные светильники StLuce</div>
                            <FullScreenImages images={certificatesStLuce1} />
                        </div>
                        <div>
                            <div className="certificates--name">Стационарные светильники StLuce</div>
                            <FullScreenImages images={certificatesStLuce2} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники OdeonLight</div>
                            <FullScreenImages images={certificatesOdeonLight} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники Maytoni</div>
                            <FullScreenImages images={certificatesMaytoni1} />
                        </div>
                        <div>
                            <div className="certificates--name">Светодиодные светильники Maytoni</div>
                            <FullScreenImages images={certificatesMaytoni2} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники Сонекс</div>
                            <FullScreenImages images={certificatesSonex} />
                        </div>
                        <div>
                            <div className="certificates--name">Светильники Bohemia Ivele Crystal</div>
                            <FullScreenImages images={certificatesIveleCrystal} />
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Certificates;