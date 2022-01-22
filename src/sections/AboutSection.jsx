import React, { useEffect } from "react";
import aboutImg from "../images/about.svg";
import { motion, useAnimation } from "framer-motion";
import { aboutSectionText } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import { useInView } from "react-intersection-observer";

const stack1 = ["Git", "CSS", "HTML", "Gsap", "ReactJs"];

const stack2 = [
    "Tailwind CSS",
    "Typescript",
    "Javascript",
    "React Native",

    "Framer Motion",
    "React Testing Library",
];
const AboutSection = () => {
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

    const { about } = aboutSectionText;

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
          
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: .5,
            },
        },
    };
    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, rotate: 360 },
    };

    return (
        <motion.div className="mt-10 " id="about">
            <motion.img
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: {
                        y: 0,
                        // opacity:1,
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                            bounce: 1,
                        },
                    },
                    hidden: { y: 20 },
                }}
                src={aboutImg}
                alt="about"
                className="mb-10"
            />
            <div className="flex justify-between lg:px-20 px-6 ">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: {
                            y: 0,
                            // opacity:1,
                            transition: {
                                duration: 1,
                                ease: "easeInOut",
                                bounce: 1,
                            },
                        },
                        hidden: { y: 20 },
                    }}
                >
                    <p className="text-textGray leading-9  text-sm lg:w-3/4">
                        {about}
                    </p>
                    <div className="mt-4">
                        <PrimaryButton text="View my Resume" />
                    </div>
                </motion.div>
                <div className="hidden lg:inline-block">
                    <div className="border-t-4 border-textBlack w-14" />
                    <p className="text-textBlack text-xl mb-4 ">My Stack</p>
                    <div className="flex  ">
                        {stack1.map((item, index) => (
                            <motion.div
                                key={index}
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: {
                                        opacity: 1,

                                        // translateY: 0,
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                            bounce: 0.1,
                                            delay: index * 0.1,
                                        },
                                    },
                                    hidden: {
                                        opacity: 0,
                                        // translateY: -50,
                                    },
                                }}
                                className=" mb-1"
                            >
                                <div className="mx-1 ">
                                    <PrimaryButton text={item} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-wrap">
                        {stack2.map((item, index) => (
                            <motion.div
                                key={index}
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: {
                                        opacity: 1,

                                        transition: {
                                            type: "spring",
                                            duration: 1,
                                            ease: "easeInOut",
                                            bounce: 0.1,
                                            delay: index * 0.1,
                                        },
                                    },
                                    hidden: {
                                        opacity: 0,
                                    },
                                }}
                                className=""
                            >
                                <div className="mx-1 my-2">
                                    <PrimaryButton text={item} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 " style={{ zIndex: -1 }}>
                    <motion.svg
                        ref={ref}
                        animate={controls}
                        width="228"
                        height="700"
                        viewBox="0 0 228 1272"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        variants={svgVariants}
                        // animate="visible"
                        initial="hidden"
                    >
                        <motion.path
                            d="M1263.63 636.14C1263.63 289.685 982.769 8.82682 636.313 8.82685C289.858 8.82688 9.00002 289.685 9.00005 636.14C9.00009 982.596 289.858 1263.45 636.314 1263.45"
                            stroke="#D07425"
                            strokeWidth="16.7284"
                            strokeLinecap="round"
                            variants={pathVariants}
                        />
                    </motion.svg>
                </div>
                {/* mobile stack */}
            </div>
            <div className="sm:hidden mt-10">
                <div className="border-t-4 border-textBlack w-14" />
                <p className="font-semibold text-textBlack">
                    My Favorite Stack
                </p>
                <div className="mt-4 flex justify-between">
                    <div>
                        {stack1.map((item, index) => (
                            <ul className="list-disc px-4 italic" key={index}>
                                <li className="text-sm">{item}</li>
                            </ul>
                        ))}
                    </div>
                    <div>
                        {stack2.map((item, index) => (
                            <ul className="list-disc px-4 italic" key={index}>
                                <li className="text-sm">{item}</li>
                            </ul>
                        ))}
                    </div>
                    l
                </div>
            </div>
        </motion.div>
    );
};

export default AboutSection;
