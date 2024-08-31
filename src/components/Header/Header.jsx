import React, {useState, useEffect} from "react";
import './Header.scss';
import Instagram from "../../assets/icons/instagram.svg";
import Vkontakte from "../../assets/icons/vkontakte.svg";
import Logo from "../../assets/logo/logo-before.svg";
import LogoAfter from "../../assets/logo/logo-after.svg";
import CropLogoBefore from "../../assets/logo/logo-crop-before.svg";
import CropLogoAfter from "../../assets/logo/logo-crop-after.svg";
import Cart from "../../assets/icons/cart.svg";
import PhoneBefore from "../../assets/icons/white-phone.svg";
import PhoneAfter from "../../assets/icons/phone.svg";
import {Link} from "react-router-dom";
import Order from "../Order/Order.jsx";


import ScrollToTop from "../../../ScrollToTop.js";
import {NavMobile} from "../NavMobile/NavMobile.jsx";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
        {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">Сумма: <span>{new Intl.NumberFormat().format(summa)}₽</span></p>
            <div className="order-button-wrap">
                <button className="order-button">Оформить заказ</button>
            </div>
        </div>)
}

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Товаров нет.</h2>
        </div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    //const [fixed, setFixed] = useState(false);
    const [logoSrc, setLogoSrc] = useState(Logo);
    const [CropLogoSrc, setCropLogoSrc] = useState(CropLogoBefore);
    const [PhoneSrc, setPhoneSrc] = useState(PhoneBefore);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setScrolled(true);
                setLogoSrc(LogoAfter);
                setCropLogoSrc(CropLogoAfter);
                setPhoneSrc(PhoneAfter)
            } else {
                setScrolled(false);
                setLogoSrc(Logo);
                setCropLogoSrc(CropLogoBefore);
                setPhoneSrc(PhoneBefore)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="wrap">
            <ScrollToTop/>
            <div className="substring">
                <div className="substring__container">
                    <div className="substring-phones">
                        <a className="substring-phone" href="tel:79781239043"><span>+7-978-123-90-43</span> пр. Победы 43</a>
                        <a className="substring-phone" href="tel:79780919559"><span>+7-978-091-95-59</span> ул. Генерала Васильева, 43</a>
                        <a className="substring-phone" href="tel:79789433373"><span>+7-978-943-33-73</span> ул. Бородина, 73</a>
                    </div>
                    <div className="substring-socials">
                        <a href="https://www.instagram.com/lighthouse_simf?igsh=anBidm5mdzgxc2x0">
                            <img className="substring-instagram" src={Instagram} alt="instagram"/>
                        </a>
                        <a href="https://vk.com/light_house_simferopol" target="_blank">
                            <img className="substring-vkontakte" src={Vkontakte} alt="vkontakte"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-wrap">
                <div className={scrolled ? 'header scrolled' : 'header'}>
                    <div className="header__container" >
                        <div className="header-line">
                               <NavMobile/>
                                <div className="header__logo">
                                    <a href="#" className="header__logo-link" >
                                        <img src={logoSrc} alt="logo" id="main-logo" width={170}></img>
                                    </a>
                                </div>
                                <div className="header__mobile-logo">
                                    <a href="#" className="header__logo-link">
                                        <img className="header-croplogo" src={CropLogoSrc} alt="logo"></img>
                                    </a>
                                </div>
                                <div className="header-nav">
                                    <Link to={`/lighthouse/products`} className={scrolled ? 'nav-item scrolled' : 'nav-item'}>Продукция</Link>
                                    <Link to={`/lighthouse/aboutus`} className={scrolled ? 'nav-item scrolled' : 'nav-item'}>О нас</Link>
                                    <Link to={`/lighthouse/contacts`} className={scrolled ? 'nav-item scrolled' : 'nav-item'}>Контакты</Link>
                                    <Link to={`/lighthouse/certificates`} className={scrolled ? 'nav-item scrolled' : 'nav-item'}>Сертификаты</Link>
                                </div>
                                {/*<FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart ${cartOpen && 'active'}`}/>*/}
                                <div className="header-actions">
                                    <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart ${cartOpen && 'active'}`}>
                                           <div className="cart-and-count">
                                                <img src={Cart} alt="cart"/>
                                                <span className="item-count">0</span>
                                           </div>
                                    </div>
                                    <div className="phone">
                                        <a href="tel:880003505875">
                                            <img src={PhoneSrc} alt="phone" width={17}/>
                                        </a>
                                        <a className={scrolled ? 'phone-number scrolled' : 'phone-number'} href="tel:880003505875">+8 800-350-58-75</a>
                                    </div>
                                </div>
                                {cartOpen &&  (
                                    <div className="shop-cart">
                                        {props.orders.length > 0 ?
                                            showOrders(props) : showNothing() }
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;