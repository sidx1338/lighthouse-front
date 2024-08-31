import React from "react";
import './CompInfo.scss';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SwipperParalax from "../../components/SwipperParalax/SwipperParalax";
import LightHouseImages from "../../components/LightHouseImages/LightHouseImages.jsx";
 //import SwipperCube from "../../components/SwipperCube/SwipperCube";




const CompInfo = () => {
    return (
        <>
            <Header/>
            <div className="compinfo-wrap">
                <div>
                    <SwipperParalax/>
                    <div className="compinfo-title">О МАГАЗИНЕ</div>
                </div>
                <div className="comp-images">
                    <LightHouseImages/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export {CompInfo};