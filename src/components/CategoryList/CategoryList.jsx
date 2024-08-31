import * as React from 'react';
import './CategoryList.scss';
import {API_URL} from '../../constants.js';
import {useEffect, useState} from "react";

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL + 'categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, []);

    const filterCategories = categories.filter(category => category.ParentID === 0);

    return (
        <>
            <div className="categories__container">
                <div className="categories">
                    {filterCategories.map(category => (
                        <div className="category-button">
                           <div className="category-title">{category.Name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategoryList;
