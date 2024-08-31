import * as React from "react";
import { motion } from "framer-motion";
import './MenuItem.scss';
import '../../menu.scss'
import {Link} from "react-router-dom";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const variants2 = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const MenuItem = () => {
    return (
        <motion.ul className="navigation-ul" variants={variants2}>
            <motion.li
                className="menu-item"
                variants={variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
            >
                <Link to={`/`} className="menu-link">Главная</Link>
            </motion.li>
            <motion.li
                className="menu-item"
                variants={variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
            >
                <Link to={`/lighthouse/products`} className="menu-link">Продукция</Link>
            </motion.li>
            <motion.li
                className="menu-item"
                variants={variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
            >
                <Link to={`/lighthouse/aboutus`} className="menu-link">О нас</Link>
            </motion.li>
            <motion.li
                className="menu-item"
                variants={variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
            >
                <Link to={`/lighthouse/contacts`} className="menu-link">Контакты</Link>
            </motion.li>
            <motion.li
                className="menu-item"
                variants={variants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
            >
                <Link to={`/lighthouse/certificates`} className="menu-link">Сертификаты</Link>
            </motion.li>
        </motion.ul>
    );
};
