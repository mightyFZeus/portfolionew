import React from 'react';
import AboutSection from './AboutSection';
import CallToActionSection from './CallToActionSection';
import ProjectSection from './ProjectSection';
import { motion } from 'framer-motion';

const Body = () => {
    return (
        <motion.div className="lg:px-16 xl:px-20 px-6 py-10 sm:py-0" animate={{x:0, transformOrigin:"center"}} initial={{x:"-100vw"}} transition={{duration:1.5, }}>
            <CallToActionSection />
            <AboutSection />
            <ProjectSection />
        </motion.div>
    );
};

export default Body;
