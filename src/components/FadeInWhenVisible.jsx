import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut", bounce: 1 },
                },
                hidden: { opacity: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible


