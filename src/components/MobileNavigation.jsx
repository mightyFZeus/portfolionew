import React from "react";
import { motion } from "framer-motion";
// import { sideBarItems } from "../utils/data";

const Sidebar = ({ input, setInput, submitHandler, toggleMenu }) => {
    // const { share, firstArr, secondArr, logoText } = sideBarItems;
    return (
        <motion.div animate={{ opacity: 1, zIndex:1000}} initial={{opacity:0, zIndex:0}} className=" bg-white w-full fixed top-0 left-0 right-0 bottom-0 h-screen  z-1000   ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-auto mb-4 mt-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </motion.div>
    );
};

export default Sidebar;
