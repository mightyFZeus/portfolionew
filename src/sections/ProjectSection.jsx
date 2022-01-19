import React, {useEffect} from 'react'
import projectImg from '../images/project.svg'
import test from '../images/test.svg'
import { motion, useAnimation } from 'framer-motion'
import { projectArray } from '../utils/constants'
import { useInView } from "react-intersection-observer";

const ProjectSection = () => {
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
        <div className="mt-16">
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
                        stroke-width="30"
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
                            duration: 1,
                            ease: "easeInOut",
                            bounce: 1,
                        },
                    },
                    hidden: { y: 20 },
                }}
            >
                {projectArray.map((project, index) => (
                    <motion.div
                        key={project.id}
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    bounce: 1,
                                    delay: 0.5 * index,
                                },
                            },
                            hidden: { opacity: 0, y: 90 },
                        }}
                    >
                        <div className="flex justify-between  my-7">
                            <img
                                src={test}
                                className="w-96"
                                alt="project-img"
                            />
                            <div className="w-5/12 mx-auto">
                                <p className="text-textBlack text-4xl font-semibold mb-6">
                                    {project.title}
                                </p>
                                <p className="  text-left text-sm text-textGray font-semibold leading-8">
                                    {project.desc}
                                </p>
                                <div className="flex justify-between mt-6 gap-10  ">
                                    <a href={project.link}>
                                        <motion.svg
                                            animate={controls}
                                            initial="hidden"
                                            variants={svgVariants}
                                            ref={ref}
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <motion.path
                                                variants={pathVariants}
                                                d="M26.9168 11.0835L11.0835 26.9168"
                                                stroke="#06294A"
                                                strokeWidth="3.16667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <motion.path
                                                variants={pathVariants}
                                                d="M12.6665 11.0835H26.9165V25.3335"
                                                stroke="#06294A"
                                                strokeWidth="3.16667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </motion.svg>
                                    </a>
                                    <a href={project.git}>
                                        <motion.svg
                                            animate={controls}
                                            initial="hidden"
                                            variants={svgVariants}
                                            ref={ref}
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <motion.path
                                                variants={pathVariants}
                                                d="M27.6451 5.60497C22.4835 2.34331 15.5326 2.3433 10.3551 5.58914C5.19347 8.8508 2.18514 15.105 2.8818 21.1691C3.57847 27.2491 7.93264 32.6641 13.696 34.6591C14.0601 34.7858 14.3768 34.8333 14.646 34.8333C15.2318 34.8333 15.6276 34.5958 15.881 34.3425C16.451 33.8041 16.451 33.0758 16.451 32.7591L16.4668 31.635C16.4668 30.8116 16.4668 29.9883 16.451 29.165L16.4351 27.8191L16.4985 27.2175C16.5776 26.6633 16.8151 26.125 17.1793 25.6816C17.4801 25.3016 17.5276 24.7791 17.2901 24.3516C17.0685 23.9241 16.6093 23.7025 16.1026 23.75C14.266 23.9875 12.2551 23.0058 11.2735 21.4066C10.2918 19.7916 10.3551 17.5908 11.4793 15.9758C11.6218 15.7541 11.8276 15.4691 11.9226 15.0733C12.0493 14.5666 11.9543 14.1233 11.8751 13.7116C11.7643 13.1258 11.7801 12.5083 11.9226 11.8908C12.3501 12.0333 12.7776 12.2075 13.1576 12.4291L13.4426 12.5875C13.886 12.8566 14.4401 13.1891 15.1368 13.3C15.786 13.4108 16.4035 13.2841 16.8943 13.1891L17.0843 13.1416C18.3351 12.9041 19.6651 12.8883 20.916 13.1258L21.1376 13.1733C21.7868 13.3 22.6101 13.4583 23.4493 13.1891C23.8926 13.0466 24.2568 12.825 24.5418 12.635L24.716 12.5241C25.1751 12.2391 25.6501 12.0175 26.1885 11.875C26.2993 12.3816 26.331 12.9358 26.2201 13.5691C26.1568 13.87 26.0776 14.2975 26.1568 14.7566C26.2518 15.3108 26.5368 15.7383 26.8376 16.1658C27.8668 17.7333 27.8826 19.9183 26.8851 21.5016C25.8718 23.0691 23.8768 23.9875 22.0401 23.7183C21.5493 23.6391 21.0901 23.8766 20.8526 24.2883C20.5993 24.7 20.631 25.2225 20.916 25.6025C21.4543 26.315 21.7076 27.3441 21.6918 28.7691C21.6918 29.2125 21.6601 29.6716 21.6443 30.115C21.581 31.0491 21.5335 31.9991 21.6443 32.9966C21.676 33.2816 21.771 34.105 22.531 34.5641C23.2593 35.0233 24.0193 34.7541 24.3043 34.6591C28.136 33.3291 31.4451 30.4316 33.4085 26.695C34.3268 24.9375 34.8968 23.085 35.1185 21.185C35.8151 15.105 32.8068 8.85081 27.6451 5.60497Z"
                                                fill="#06294A"
                                            />
                                        </motion.svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default ProjectSection
