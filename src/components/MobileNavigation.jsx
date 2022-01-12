import React from "react";
import { motion } from "framer-motion";
import { navigationItems, iconBar } from "../utils/constants";


const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, rotate: 360 },
};

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        scale: 1.5,
        transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 1,
        },
    },
};

const Sidebar = ({ input, setInput, submitHandler, toggleMenu }) => {
    
    return (
        <motion.div
            animate={{ opacity: 1, x: 0, zIndex: 1000 }}
            initial={{ opacity: 0, x: "100vw", zIndex: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" bg-white w-full fixed top-0 left-0 right-0 bottom-0 h-screen px-6 py-10  "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-auto "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
                variants={svgVariants}
                animate="visible"
                initial="hidden"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    variants={pathVariants}
                    animate="visible"
                    initial="hidden"
                />
            </svg>
            <div>
                {navigationItems.map((item, index) => (
                    <div
                        key={item}
                        className="text-textBlack my-6 text-xl font-bold  "
                    >
                        <p>{item.item}</p>
                        <hr className="h-2" />
                    </div>
                ))}
            </div>
            <div className=" flex gap-10 mt-10">
                {/* github */}
                {iconBar.map((item, ) => (
                    <a href={item.link} key={item.id}>
                        <motion.svg
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
        </motion.div>
    );
};

export default Sidebar;