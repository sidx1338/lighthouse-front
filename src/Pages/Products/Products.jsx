import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Products.scss';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import SortByPrice from '../../components/SortByPrice/SortByPrice';
import { loadCategories, loadProducts } from '../../redux/products.js';
import { addToCart } from '../../redux/cart.js';

const Products = () => {
    const dispatch = useDispatch();
    const { filteredProducts, filters, status, error }
        = useSelector((state) => state.products);

    // Fetch categories and products on component mount
    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadProducts(filters.category));
    }, [dispatch, filters.category]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // Show loading state or error message
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
            <div className="products-top-background"/>
                <Header/>
                <div className="items--title">В РАЗРАБОТКЕ</div>
            <div className="products-mid-background">
            <CategoryList/>
            <SortByPrice/>
                <div className="items__container">
                    {filteredProducts?.map(product => {
                        return (<div className="item" key={product.ID}>
                            <div className="item-availability"></div>
                            <img className="item-img" src={
                                `${import.meta.env.VITE_IMAGE_URL}/${product.images[0]?.thumbs?.Path}/${product.images[0]?.thumbs?.File}`
                            } alt="" />
                            <div className="item-title">{product.Name}</div>
                            <div className="item-price">{product.Price}₽</div>
                            <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                        </div>)
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Products;
