import React, { useState } from "react";
import logo from "../images/logo.webp";
import { iconBar, navigationItems } from "../utils/constants";
import { motion } from "framer-motion";


const NavigationBar = () => {
    const [active, setActive] = useState(null);

    const navVariants = {
        hidden: {
            opacity: 0,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: 20,
            transition: {
                duration: 0.7,
                delay: 0.5,
                
            },
        },
    };

  
    
    const svgVariants= {
        hidden: { opacity: 0 },
        visible: { opacity: 1, rotate:360 },
       
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            scale:1.5,
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 1,
            },
        },
    };

    return (
        <motion.nav
            animate="visible"
            initial="hidden"
            variants={navVariants}
            className="flex justify-between items-center w-full  "
        >
            <img src={logo} alt="logo" />

            <div className=" hidden lg:flex gap-10 ">
                {navigationItems.map((item, index) => (
                    <motion.p
                        key={index}
                        whileHover={{
                            scale: 0.6,
                            fontStyle: "italic",
                        }}
                        className={
                            active === index
                                ? "cursor-pointer border-b-4 border-textBlack"
                                : ""
                        }
                        onClick={() => setActive(index)}
                    >
                        {item.item}
                    </motion.p>
                ))}
            </div>
            <div className="hidden lg:flex gap-10">
                {/* github */}
                {iconBar.map((item) => (
                    <a href={item.link} key={item.id}>
                        <motion.svg
                            whileHover={{
                                scale: 1.5,
                                rotate: 360,
                                transformOrigin: "center",
                            }}
                            transition={{ duration: 0.8 }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d={item.path} fill="#000" />
                            <path d={item.multi} fill="#000" />
                        </motion.svg>
                    </a>
                ))}
            </div>
            {/* hamburger menu */}
            <div className="sm:hidden">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    variants={svgVariants}
                    animate="visible"
                    initial="hidden"
                >
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 6h16M4 12h16M4 18h7"
                        variants={pathVariants}
                        animate="visible"
                        initial="hidden"
                    />
                </motion.svg>
            </div>
        </motion.nav>
    );
};

export default NavigationBar;
