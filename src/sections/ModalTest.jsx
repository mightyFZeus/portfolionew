import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalTest = ({ toggleModal }) => {
    
    
    return (
        <AnimatePresence >
            <motion.p
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: "-100vw", opacity: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 3,
                }}
                exit={{ x: "-100vw", opacity: 0 }}
                onClick={toggleModal}
                className="text-center mt-10  text-textBlack text-5xl font-semibold"
            >
                More Projects
            </motion.p>
        </AnimatePresence>
    );
};

export default ModalTest;
