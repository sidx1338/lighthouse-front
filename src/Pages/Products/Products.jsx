import React, { useState, useEffect } from 'react';
import './Products.scss';
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import {API_URL} from "../../constants.js";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import SortByPrice from "../../components/SortByPrice/SortByPrice";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}products?page=1&perPage=30`);
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="products-top-background"/>
                <Header/>
                <div className="items--title">В РАЗРАБОТКЕ</div>
            <div className="products-mid-background">
            <CategoryList/>
            <SortByPrice/>
                <div className="items__container">
                    {products.map(product => (
                    <div className="item" key={product.ID}>
                        <div className="item-availability">В наличии: 10</div>
                        <img className="item-img" src={`https://lhouse.com.ru/${product.images[0].thumbs.Path}${product.images[0].thumbs.File}`} alt="" />
                        <div className="item-title">{product.Name}</div>
                        <div className="item-price">{product.Price}₽</div>
                    </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Products;



















// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import Header from "../../components/Header/Header.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
// import Items from "../../components/Items/Items.jsx";
// import './Products.scss'
//
// const [products, setProducts] = useState([]);
//
// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/api/products?page=5&perPage=10');
//             const data = await response.json();
//             setProducts(data.data);
//         } catch (error) {
//             console.error('Ошибка при загрузке данных:', error);
//         }
//     };
//
//     fetchData();
// }, []); //  <--  Удалили массив зависимостей
// const [showButton, setShowButton] = useState(false);
//
// class Products extends React.Component {
//
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             orders: [],
//             products:[],
//         }
//         this.addToOrder = this.addToOrder.bind(this)
//         this.deleteOrder = this.deleteOrder.bind(this)
//     }
//     render() {
//         return (
//             <div className="products">
//                 <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
//                 <div className="products-items">
//                     <Items items={this.state.products} onAdd={this.addToOrder}/>
//                 </div>
//                 <Footer/>
//             </div>
//         )
//     }
//
//     deleteOrder(id) {
//         this.setState({orders: this.state.orders.filter(el => el.id !== id)})
//     }
//
//     addToOrder(item) {
//         let isInArray = false
//         this.state.orders.forEach(el => {
//             if(el.id === item.id)
//                 isInArray = true
//         })
//         if (!isInArray)
//         this.setState({orders: [...this.state.orders, item]})
//     }
// }
//
// export default Products;