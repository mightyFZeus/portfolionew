import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { callToActionText } from "../utils/constants";
import guy from '../images/guy.svg'
import { motion } from "framer-motion";

const variant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 0.5,
        },
    },
};
 


   
const CallToActionSection = () => {
    const { name, description, role1, role2 } = callToActionText;
    return (
        <div>
            <motion.div className="lg:mt-40 mt-16  md:flex justify-between ">
                <motion.div>
                    <motion.p
                        animate={{ opacity: 1, transformOrigin: "center" }}
                        initial={{ y: 0, opacity: 0 }}
                        transition={{ duration: 1, yoyo: Infinity }}
                        className="font-bold text-2xl"
                    >
                        {name}
                    </motion.p>
                    <motion.p
                        variants={variant}
                        animate="visible"
                        initial="hidden"
                        className="xl:text-7xl lg:text-5xl text-4xl  font-light"
                    >
                        {role1}
                    </motion.p>
                    <motion.p
                        animate="visible"
                        initial="hidden"
                        variants={variant}
                        className="xl:text-7xl lg:text-5xl text-4xl  font-light"
                    >
                        {role2}
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={variant}
                        className="text-textGray text-sm mt-6 lg:w-3/4 leading-7"
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        className="mt-4"
                        initial="hidden"
                        animate="visible"
                        variants={variant}
                    >
                        <motion.div
                            animate={{ x: 10 }}
                            initial={{ x: 0 }}
                            transition={{ duration: 1, yoyo: Infinity }}
                        >
                            <a href="mailto:bolarinolabisi36.com">
                                <PrimaryButton text="Hire Me" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div>
                    <img src={guy} alt="guy" />
                </div>
                <div></div>
            </motion.div>
        </div>
    );
};

export default CallToActionSection;
