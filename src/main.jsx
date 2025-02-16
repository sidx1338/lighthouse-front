import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.scss'
import App from './App.jsx';
import { store } from './redux/store';
import { Contacts } from './Pages/Contacts/Contacts.jsx';
import Products from './Pages/Products/Products.jsx';
import { CompInfo } from './Pages/CompInfo/CompInfo';
import Certificates from './Pages/Сertificates/Сertificates.jsx';

const router = createHashRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/lighthouse',
        element: <App/>
    },
    {
        path: '/lighthouse/products',
        element: <Products/>
    },
    {
        path: '/lighthouse/about',
        element: <CompInfo/>
    },
    {
        path: "/lighthouse/contacts",
        element: <Contacts/>
    },
    {
        path: "/lighthouse/certificates",
        element: <Certificates/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
