import * as React from "react";
import { motion } from "framer-motion";
import './MenuToggle.scss';
import {useEffect, useState} from "react";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle, isOpen }) => {
    const [isDark, setIsDark] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsDark(true);
        } else if (window.scrollY <= 25) {
            setIsDark(false);
        }
    }, [isOpen]);

    return (
        <button className="burger-button" onClick={() => {
            toggle();
        }}>
            <svg width="20" height="20" viewBox="0 0 23 18" className="sdads">
                <Path
                    stroke={isDark ? '#484A4C' : '#e5e5e5'}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    stroke={isDark ? '#484A4C' : '#e5e5e5'}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    stroke={isDark ? '#484A4C' : '#e5e5e5'}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    );
};
