import React from "react";
import { motion,  } from "framer-motion";
import { navigationItems, iconBar } from "../utils/constants";
import { Link } from "react-scroll";


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
        scale: 1.2,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
            delay: 1,
        },
    },
};

const Sidebar = ({ toggleMenu }) => {
    
    return (
        <motion.div
            animate={{ opacity: 1, x: 0, zIndex: 1000 }}
            initial={{ opacity: 0, x: "-100vw", zIndex: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ x: "100vw" }}
            className=" bg-white w-full fixed top-0 left-0 right-0 bottom-0  px-6 py-10  "
        >
            <motion.svg
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
                <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    variants={pathVariants}
                />
            </motion.svg>

            <div>
                {navigationItems.map((item,index ) => (
                     <Link
                        key={index}
                        smooth={true}
                        duration={1000}
                        to={item.link}
                    >
                     
                        <p onClick={toggleMenu} className="text-textBlack my-2 text-xl font-bold  ">{item.item}</p>
                        <hr className="h-2" />
                    </Link>
                ))}
            </div>
            <div className=" flex gap-10 mt-10">
                {/* github */}
                {iconBar.map((item) => (
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
