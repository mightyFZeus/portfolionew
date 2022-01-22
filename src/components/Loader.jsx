import React from "react";
import { motion } from "framer-motion";

export const LoaderExample = () => {
    const stack = [
        "React",
        "React Native",
        "Javascript",
        "Typescript",
        "Framer Motion",
    ];
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
                duration: 1,
            }}
            exit={{ x: "100vw" }}
            className="flex justify-center  items-center"
            style={{ position: "absolute", top: "50%", left: "50%" }}
        >
            <div className="flex   mx-auto">
                {/* CLICK ME!!! */}
                <motion.div
                    animate={{
                        rotate: 360,
                        borderRadius: "50%",
                        y: 20,
                        
                    }}
                    initial={{
                        y: -20,
                    }}
                    transition={{
                        yoyo: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        height: "50px",
                        background: "#D07425",
                        width: "50px",
                        borderRadius: " 50%",
                    }}
                ></motion.div>
                <>
                    {/* <p className="text-center">Bolarin Creates</p> */}

                    <motion.div className="  p-2">
                        {stack.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1.3, delay: index * 2 }}
                            >
                                <motion.p
                                    className="text-4xl font-bold w-full whitespace-nowrap"
                                    style={{
                                        position: "absolute",
                                        left: "40px",
                                    }}
                                    animate={{ opacity: 0, y: -10 }}
                                    initial={{ opacity: 1, y: 30 }}
                                    transition={{
                                        duration: 2,
                                        delay: index * 2,
                                    }}
                                >
                                    {item}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            </div>
        </motion.div>
    );
};
