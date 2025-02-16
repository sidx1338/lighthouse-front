import './CategoryList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, setFilters } from '../../redux/products.js';

const CategoryList = () => {
    const dispatch = useDispatch();
    const { status, filters, filterCategories } = useSelector((state) => state.products);
    // Handle category change
    const handleCategoryChange = (e) => {
        dispatch(setFilters({ category: e.target.value }));
        dispatch(loadProducts(e.target.value));  // Fetch products when category changes
    };
    // Show loading state or error message
    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: { error }</p>;
    return (
        <>
            <div className="categories__container">
                <div className="categories">
                    <select className="category-button" name="category" value={filters.category} onChange={handleCategoryChange}>
                        <option value="all">All</option>
                        {filterCategories?.map((category) => (
                            <option className="category-title" key={category.Name} value={category.ID}>{category.Name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}

export default CategoryList;
