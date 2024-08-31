import React, { useState } from 'react';
import './Item.scss';
import Cart from "../../assets/icons/item-cart.svg";
import Heart from "../../assets/icons/item-heart.svg";
import {useEffect} from "@types/react";




const Item = ({ product, onAdd }) => { // Принимаем props


    return (
        <div className="item">
            <div className="items__container">
                <div className="" key={product.ID}>
                    {/*{console.log(`https://lhouse.com.ru/${product.images[0].thumbs.Path}`+`{File}`)}*/}
                    {/*<div className="item-availability">В наличии: 10</div>*/}
                    {/*{console.log(product.images[0].thumbs.File)}*/}
                    <img className="item-img" src={`https://lhouse.com.ru/${product.images[0].thumbs.Path}${product.images[0].thumbs.File}`} alt="" />
                    <div className="item-title">{product.Name}</div>
                    <div className="item-price">{product.Price}₽</div>
                </div>
            </div>
             {/*<div*/}
             {/*    // onMouseEnter={() => setShowButton(true)}*/}
             {/*    // onMouseLeave={() => setShowButton(false)}*/}
             {/*    className="effect"*/}
             {/*>*/}
             {/*        <div className="effect-to-right">*/}
             {/*            /!*<div className="item-subtext">*!/*/}
             {/*                <div className="item-availability">В наличии: {item.availability}</div>*/}
             {/*                <div className="item-icons">*/}
             {/*                    /!*{showButton && (*!/*/}
             {/*                    /!*    <div className="item-cart" onClick={() => onAdd(item)}>*!/*/}
             {/*                    /!*        <img src={Cart} alt="cart" width={20}/>*!/*/}
             {/*                    /!*    </div>*!/*/}
             {/*                    /!*)}*!/*/}
            {/*                    <div className="addtocart" onClick={() => onAdd(item)}>*/}
             {/*                        <button>Добавить в корзину</button>*/}
             {/*                    </div>*/}
             {/*                </div>*/}
             {/*            /!*</div>*!/*/}
             {/*            <img className="item-img" src={`./img/${item.img}`} alt="" />*/}
             {/*        </div>*/}
             {/*</div>*/}
             {/*<div className="item-title">{item.title}</div>*/}
          {/*<div className="item-price">{item.price}{item.currency}</div>*/}
         </div>
    );
};

export default Item;
