import React from 'react'
import aboutImg from "../images/about.svg"
import {motion} from "framer-motion"
import { aboutSectionText } from '../utils/constants'
import PrimaryButton from '../components/PrimaryButton'

const stack1 = ["Git",  "CSS","HTML", "Gsap",  "ReactJs",];

const favorite = [
    "Javascript",
    "ReactJs",
    "Tailwind CSS",
    "React Native",
    
    "Framer Motion",
]
const stack2 = [
    "Tailwind CSS",
    "Typescript",
    "Javascript",
    "React Native",

    "Framer Motion",
    "React Testing Library",
];
const AboutSection = () => {
    const {about} = aboutSectionText
    return (
        <div className="mt-10">
            <img src={aboutImg} alt="about" className="mb-10" />
            <div className="flex">
                <div>
                    <p className="text-textGray leading-9  text-sm lg:w-11/12">
                        {about}
                    </p>
                    <div className="mt-4">
                        <PrimaryButton text="View my Resume" />
                    </div>
                </div>
                <div className="hidden lg:inline-block">
                    <div className="border-t-4 border-textBlack w-14" />
                    <p className="text-textBlack text-xl ">My Stack</p>
                    <div className="flex  ">
                        {stack1.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: 30, opacity: 1 }}
                                initial={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 1, delay: 1.1 }}
                                className="my-3"
                            >
                                <PrimaryButton text={item} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-wrap">
                        {stack2.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: 20, opacity: 1 }}
                                initial={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 1, delay: 1.1 }}
                                className=""
                            >
                                <PrimaryButton text={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* mobile stack */}
            </div>
            <div className="sm:hidden mt-10">
                <div className="border-t-4 border-textBlack w-14" />
                <p className="font-semibold text-textBlack">
                    My Favourite Stack
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
        </div>
    );
}

export default AboutSection
