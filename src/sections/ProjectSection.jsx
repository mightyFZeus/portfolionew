import React, { useEffect, useState } from "react";
import projectImg from "../images/project.svg";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { projectArray } from "../utils/constants";
import { useInView } from "react-intersection-observer";
import Projects from "../components/Projects";

const ProjectSection = () => {
    const [modal,setModal] = useState(true)

    const toggleModal = () => {
        setModal(prev =>!prev)
    }
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
                delay: 0.5,
            },
        },
    };
    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, rotate: 360 },
    };
    return (
        <div>
            <div className="mt-16" id="projects">
                <img src={projectImg} alt="project-img" />
                <div className="absolute left-0 " style={{ zIndex: -1 }}>
                    <motion.svg
                        width="246"
                        height="1200"
                        viewBox="0 0 246 1629"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={svgVariants}
                    >
                        <motion.path
                            variants={pathVariants}
                            d="M-58.651 10.4329C359.932 479.281 319.185 1198.69 -149.663 1617.27"
                            stroke="#D07425"
                            strokeWidth="30"
                        />
                    </motion.svg>
                </div>
                <motion.div
                    className=""
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: {
                            y: 0,
                            // opacity:1,
                            transition: {
                                duration: .5,
                                ease: "easeInOut",
                                bounce: 1,
                            },
                        },
                        hidden: { y: 20 },
                    }}
                >
                    {projectArray.map((project, index) => (
                       <Projects project={project} index={index} key={project.id} />
                    ))}
                </motion.div>
            </div>
            <AnimatePresence>
                {modal && (
                    <motion.p
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: "-100vw", opacity: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                        }}
                        exit={{ x: "100vw", opacity: 0 }}
                        onClick={toggleModal}
                        className="text-center mt-10  text-textBlack text-5xl font-semibold"
                    >
                        More Projects
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectSection;
