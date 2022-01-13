import React, {useEffect} from 'react'
import aboutImg from "../images/about.svg"
import {motion, useAnimation} from "framer-motion"
import { aboutSectionText } from '../utils/constants'
import PrimaryButton from '../components/PrimaryButton'
import { useInView } from 'react-intersection-observer'

const stack1 = ["Git",  "CSS","HTML", "Gsap",  "ReactJs",];


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
  
    const {about} = aboutSectionText
    return (
        <motion.div className="mt-10 lg:px-32 px-6 py-10">
            <img src={aboutImg} alt="about" className="mb-10" />
            <div className="flex">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: {
                            y: 0,
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
                    <p className="text-textBlack text-xl ">My Stack</p>
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
                                        x: 0,
                                        // translateY: 0,
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                            bounce: 0.1,
                                            delay: index * 0.1,
                                            type: "spring",
                                        },
                                    },
                                    hidden: {
                                        opacity: 0,
                                        // translateY: -50,
                                        x: "100vw",
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
                                        translateX: 0,
                                        translateY: 0,
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
                                        translateY: 50,
                                        translateX: 50,
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
                </div>
            </div>
        </motion.div>
    );
}

export default AboutSection
