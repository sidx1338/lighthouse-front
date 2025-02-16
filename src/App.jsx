import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.scss'
import '/src/index.scss'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';
import { loadCategories, loadProducts, setFilters } from './redux/products.js';
import { addToCart } from './redux/cart.js';

const App = () => {
    const dispatch = useDispatch();
    const { filteredProducts, filters, categories, status, error }
        = useSelector((state) => state.products);

    const cart = useSelector((state) => state.cart);

    // Fetch categories and products on component mount
    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadProducts(filters.category));
    }, [dispatch, filters.category]);

    // Handle category change
    const handleCategoryChange = (e) => {
        dispatch(setFilters({ category: e.target.value }));
        dispatch(loadProducts(e.target.value));  // Fetch products when category changes
    };

    // Handle filter change
    const handleFilterChange = (e) => {
        dispatch(setFilters({ [e.target.name]: e.target.value }));
    };

    return (
    <>
        <div className="main-page-wrap"/>
        <Header/>
        <div className="app-wrap">
            <div className="app__container">
                <div className="app-title-wrap">
                    <div className="app-title1"><span>L</span>IGHT<br/><span>H</span>OUSE</div>
                    <div className="app-title2"></div>
                </div>
            </div>
            <div className="app-products">
                <div className="app-products-title">ПРОДУКЦИЯ</div>
                <div className="app-products-cards">
                <CategoryCard/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default App
