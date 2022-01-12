import React, { useState } from "react";
import logo from "../images/logo.webp";
import { iconBar, navigationItems } from "../utils/constants";
import { motion } from "framer-motion";



const NavigationBar = ({ toggleMenu}) => {
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
            className="flex justify-between items-center w-full  lg:px-32 px-6 py-10"
        >
            <img
                src={logo}
                alt="logo"
                className="z-1000"
               
            />

            <div className=" hidden lg:flex gap-10 ">
                {navigationItems.map((item, index) => (
                    <motion.p
                        key={index}
                        animate={{ translateX: 0, translateY: 0 }}
                        initial={{ translateX: -50, translateY: -50 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                        whileHover={{
                            scale: 0.6,
                            fontStyle: "italic",
                            transition: {
                                ease: "easeIn",
                                duration: 0.6,
                            },
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
                {iconBar.map((item, index) => (
                    <a href={item.link} key={item.id}>
                        <motion.svg
                            animate={{ translateX: 0, translateY: 0 }}
                            initial={{ translateX: -50, translateY: -50 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.5,
                                rotate: 360,
                                transformOrigin: "center",
                            }}
                            
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
                    onClick={toggleMenu}
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
