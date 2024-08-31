import React, { useState, useEffect } from "react";
import './Footer.scss';
import Logo from "../../assets/logo/logo-after.svg";
import {Link} from "react-router-dom";
import PlaceMark from "../../assets/icons/placemark.svg";
import Phone from "../../assets/icons/phone.svg";
import Instagram from "../../assets/icons/instagram-icon-colored.svg"
import Vkontakte from "../../assets/icons/vkontakte-icon-colored.svg"

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer-info">
                    {/*<div className="footer-logo">*/}
                    {/*    <a href="/lighthouse" className="footer__logo-link">*/}
                    {/*        <img src={Logo} alt="logo" width={170}></img>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <div className="footer-row">
                        <div className="footer-goods">
                            <h3 className="footer-heading">Товары</h3>
                            <div className="footer-goods-wrap">
                                <ul className="footer-goods-ul">
                                    <li className="footer-goods-name">Люстры</li>
                                    <li className="footer-goods-name">Уличное освещение</li>
                                    <li className="footer-goods-name">Настольные лампы</li>
                                    <li className="footer-goods-name">Бра</li>
                                </ul>
                                <ul>
                                    <li className="footer-goods-name">Светильники</li>
                                    <li className="footer-goods-name">Торшеры</li>
                                    <li className="footer-goods-name">Лампочки</li>
                                    <li className="footer-goods-name">Споты</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-contacts">
                            <h3 className="footer-heading">Контакты</h3>
                            <ul>
                                <div className="footer-contacts-wrap">
                                    <img className="footer-placemark-icon" src={PlaceMark} alt="mark"/>
                                    <li className="footer-contacts-name">г. Симферополь, проспект Победы, 43</li>
                                </div>
                                <div className="footer-contacts-wrap">
                                    <img className="footer-placemark-icon" src={PlaceMark} alt="mark"/>
                                    <li className="footer-contacts-name">г. Симферополь, ул. Генерала Васильева, 43</li>
                                </div>
                                <div className="footer-contacts-wrap">
                                    <img className="footer-placemark-icon" src={PlaceMark} alt="mark"/>
                                    <li className="footer-contacts-name">г. Симферополь, ул. Бородина, 73</li>
                                </div>
                                <div className="footer-contacts-wrap">
                                    <img className="footer-phone-icon" src={Phone} alt="phone"/>
                                    <li className="footer-contacts-name">+8 800-350-58-75</li>
                                </div>
                            </ul>
                        </div>
                        <div className="footer-socialmedia">
                            <h3 className="footer-heading">Соцсети</h3>
                            <div className="footer-socialmedia-icons">
                                <a href="#" className="footer-instagram">
                                    <img src={Instagram} alt="logo" width={25}/>
                                </a>
                                <a href="#" className="footer-vkontakte">
                                    <img src={Vkontakte} alt="logo" width={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="footer__menu-links">
                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <Link to={`/lighthouse/products`} className="footer__nav-link">
                                    Продукция
                                </Link>
                            </li>
                            <li className="footer__menu-item">
                                <Link to={`/lighthouse/aboutus`} className="footer__nav-link">
                                    О нас
                                </Link>
                            </li>
                            <li className="footer__menu-item">
                                <Link to={`/lighthouse/contacts`} className="footer__nav-link">
                                    Контакты
                                </Link>
                            </li>
                            <li className="footer__menu-item">
                                <Link to={`/lighthouse/certificates`} className="footer__nav-link">
                                    Сертификаты
                                </Link>
                            </li>
                        </ul>

                    </div>
                <div className="footer__low">{currentYear} © Все права защищены</div>
            </div>

        </footer>
    )
}

export default Footer;