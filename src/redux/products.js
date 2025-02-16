import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchProducts } from '../api';

// Initial state for products, categories, and filters
const initialState = {
    allProducts: [],
    filteredProducts: [],
    categories: [],
    filters: {
        category: 'all',
        priceRange: [0, 500],
    },
    status: 'idle',
    error: null,
};

// Thunks for fetching categories and products
export const loadCategories = createAsyncThunk('products/loadCategories', async () => {
    return await fetchCategories();
});

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async (category) => {
        return await fetchProducts(category);
    }
);

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        applyFilters: (state) => {
            const { category, priceRange } = state.filters;
            console.log( priceRange);
            state.filteredProducts = state.allProducts.filter((product) => {
                return (
                   (category === 'all' || product.categories.includes(category)) &&
                    product.Price >= priceRange[0] && product.Price <= priceRange[1]
                );
            });
        },
    },
    extraReducers: (builder) => {
        // Load categories
        builder.addCase(loadCategories.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(loadCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const categories = action.payload;
            state.categories = categories;
            state.filterCategories = categories?.filter(category => category.ParentID === 0);
        });
        builder.addCase(loadCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });

        // Load products
        builder.addCase(loadProducts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.allProducts = action.payload;
            state.filteredProducts = action.payload; // Initially, apply no filters
        });
        builder.addCase(loadProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const { setFilters, applyFilters } = products.actions;
export default products.reducer;
