import React from 'react'
import { motion } from 'framer-motion';

const PrimaryButton = ({text}) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
                transition: {
                    ease: "easeIn",
                    duration:0.6
                }
            }}
            whileTap={{
                scale:0.9
            }}
            
           
            className=" py-3 px-8 w-max bg-textBlack border-2 rounded-lg text-center  text-white"
            
        >
            {text}
        </motion.button>
    );
}

export default PrimaryButton
