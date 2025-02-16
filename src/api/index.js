// Simulating API calls with fetch

// API URL (for demonstration purposes)
const API_URL = import.meta.env.VITE_API_URL;  // Replace this with your actual API endpoint

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchProducts = async (categoryId = 'all') => {
    const page = 1;
    const perPage = 100;
    let url = `${API_URL}/products?page=${page}&perPage=${perPage}`;
    if (categoryId !== 'all') {
        url += `&categoryId=${categoryId}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
