import * as React from "react";
import {useRef, useState} from "react";
import {AnimatePresence, motion, sync, useCycle} from "framer-motion";
import {useDimensions} from "../../use-dimensions.js";
import {MenuToggle} from "../MenuToggle/MenuToggle.jsx";
import '../../menu.scss';
import './NavMobile.scss';
// import {useClickAway} from "react-use";
import {MenuItem} from "../MenuItem/MenuItem";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const body = document.querySelector('body');

export const NavMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    if (isOpen === true) {
        body.classList.add('lock')
    } else {
        body.classList.remove('lock')
    }

    return (
        <>
            <div style={{
                pointerEvents: isOpen ? 'auto' : 'none'
            }}>
                <motion.nav
                    className={`nav-mobile ${isOpen ? "active" : ""}`}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <motion.div className={`menu-background ${isOpen ? "active" : ""}`} variants={sidebar} />
                    <MenuItem/>
                </motion.nav>
            </div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                initial={false}
            >
                <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
            </motion.div>
        </>
    );
};