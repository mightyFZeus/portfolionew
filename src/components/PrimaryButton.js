import React from 'react'
import { motion } from 'framer-motion';

const PrimaryButton = ({text}) => {
    return (
        <motion.button
            whileHover={{
                scale:0.7
            }}
           
            className=" py-3 px-8 w-max bg-textBlack border-2 rounded-lg text-center  text-white"
            
        >
            {text}
        </motion.button>
    );
}

export default PrimaryButton
