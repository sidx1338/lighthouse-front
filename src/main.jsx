import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, createHashRouter, HashRouter, Route,
    RouterProvider,
} from "react-router-dom";
import './index.scss'

import {Contacts} from "./Pages/Contacts/Contacts.jsx";
import App from "./App.jsx";
import Products from "./Pages/Products/Products.jsx";
import {CompInfo} from "./Pages/CompInfo/CompInfo";
import Certificates from "./Pages/Сertificates/ Сertificates.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/lighthouse",
        element: <App/>
    },
    {
        path: "/lighthouse/products",
        element: <Products/>
    },
    {
        path: "/lighthouse/aboutus",
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
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

