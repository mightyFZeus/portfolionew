import React from 'react'
import { motion } from 'framer-motion';

const FadeInWhenVisible = ({children}) => {
    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, when:"beforeChildren" }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default FadeInWhenVisible
