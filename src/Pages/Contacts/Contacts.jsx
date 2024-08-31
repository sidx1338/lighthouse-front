import React from "react";
import './Contacts.scss';
import Header from "../../components/Header/Header.jsx";
import Phone from "../../assets/icons/phone.svg";
import Schedule from "../../assets/icons/schedule.svg";
import Email from "../../assets/icons/mail.svg";
import Instagram from "../../assets/icons/instagram_grey.svg";
import Vkontakte from "../../assets/icons/vkontakte_grey.svg";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import {Form} from "../../components/Form/Form.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PlaceMark from "../../assets/icons/placemark.svg";


const Contacts = () => {
    return (
        <div>
        <div className="contacts">
            <Header/>
                <div className="contacts__container">
                    {/*<div className="contacts-background"/>*/}
                    <div className="contacts-title">НАШИ КОНТАКТЫ</div>
                    <div className="contacts-map-wrap">
                        <div className="contact-all-wrap">
                            <>
                                <div className="contacts-address">
                                    <img className="contacts-placemark" src={PlaceMark} alt="placemark"/>
                                    <div className="contacts-address-text">г. Симферополь, проспект Победы, 43</div>
                                </div>
                                <div className="contacts-wrap">
                                    <div className="contacts-number">
                                        <a href="tel:79781239043">
                                            <img className="contacts-phone-icon" src={Phone} alt="phone"/>
                                        </a>
                                        <a className="contacts-phone-number" href="tel:79781239043">+7 978-123-90-43</a>
                                    </div>
                                    <div className="contacts-schedule">
                                        <a href="#">
                                            <img className="contacts-schedule-icon" src={Schedule} alt="schedule"/>
                                        </a>
                                        <div>
                                            <div className="schedule-text"><span>Пн-Пт:</span> 9:00-19:00</div>
                                            <div className="schedule-text"><span>Сб-Вс:</span> 10:00-19:00</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="contacts-address">
                                    <img className="contacts-placemark" src={PlaceMark} alt="placemark"/>
                                    <div className="contacts-address-text">г. Симферополь, ул. Генерала Васильева, 43</div>
                                </div>
                                <div className="contacts-wrap">
                                    <div className="contacts-number">
                                        <a href="tel:79780919559">
                                            <img className="contacts-phone-icon" src={Phone} alt="phone"/>
                                        </a>
                                        <a className="contacts-phone-number" href="tel:79780919559">+7-978-091-95-59</a>
                                    </div>
                                    <div className="contacts-schedule">
                                        <a href="#">
                                            <img className="contacts-schedule-icon" src={Schedule} alt="schedule"/>
                                        </a>
                                        <div>
                                            <div className="schedule-text"><span>Пн-Пт:</span> 9:00-19:00</div>
                                            <div className="schedule-text"><span>Сб-Вс:</span> 10:00-19:00</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <>
                                <div className="contacts-address">
                                    <img className="contacts-placemark" src={PlaceMark} alt="circle"/>
                                    <div className="contacts-address-text">г. Симферополь, ул. Бородина, 73</div>
                                </div>
                                <div className="contacts-wrap">
                                    <div className="contacts-number">
                                        <a href="tel:79789433373">
                                            <img className="contacts-phone-icon" src={Phone} alt="phone"/>
                                        </a>
                                        <a className="contacts-phone-number" href="tel:79789433373">+7-978-943-33-73 </a>
                                    </div>
                                    <div className="contacts-schedule-last">
                                        <a href="#">
                                            <img className="contacts-schedule-icon" src={Schedule} alt="schedule"/>
                                        </a>
                                        <div>
                                            <div className="schedule-text"><span>Пн-Пт:</span> 9:00-19:00</div>
                                            <div className="schedule-text"><span>Сб-Вс:</span> 10:00-19:00</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                        <div className="map-socialmedia">
                            <MapComponent/>
                            <div className="contacts-socialmedia-wrap">
                                <div className="contacts-socialmedia">
                                    <a href="mailto:info@lhouse.com.ru">
                                        <img className="email-icon" src={Email} alt="email"/>
                                    </a>
                                    <a href="mailto:info@lhouse.com.ru">
                                        <div className="contacts-socialmedia-text">info@lhouse.com.ru</div>
                                    </a>
                                </div>
                                <div className="contacts-socialmedia">
                                    <a href="https://www.instagram.com/lighthouse_simf?igsh=anBidm5mdzgxc2x0" target="_blank">
                                        <img className="instagram-icon" src={Instagram} alt="instagram"/>
                                    </a>
                                    <a href="https://www.instagram.com/lighthouse_simf?igsh=anBidm5mdzgxc2x0" target="_blank">
                                        <div className="contacts-socialmedia-text">@lighthouse_simf</div>
                                    </a>
                                </div>
                                <div className="contacts-socialmedia">
                                    <a href="https://vk.com/light_house_simferopol" target="_blank">
                                        <img className="vkontakte-icon" src={Vkontakte} alt="vkontakte"/>
                                    </a>
                                    <a href="https://vk.com/light_house_simferopol" target="_blank">
                                        <div className="contacts-socialmedia-text">light_house_simferopol</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            <div className="backconnection">
                <div className="backconnection-title">НАПИШИТЕ НАМ!</div>
                <div className="backconnection-form">
                    <Form/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export {Contacts};