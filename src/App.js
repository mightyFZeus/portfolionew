import {useState} from 'react'
import MobileNavigation from "./components/MobileNavigation";


import NavigationBar from "./components/NavigationBar";
import AboutSection from "./sections/AboutSection";
import CallToActionSection from "./sections/CallToActionSection";
import {AnimatePresence} from "framer-motion"
import ProjectSection from './sections/ProjectSection';

function App() {
   const [open, setOpen] = useState(false);
   const toggleMenu = () => {
       setOpen((prevOpen) => !prevOpen);
   };
    
    

    return (
        <div className="app lg:px-16 xl:px-20 px-6 py-10 ">
        
                <NavigationBar
                    open={open}
                    setOpen={setOpen}
                    toggleMenu={toggleMenu}
                />
                <div>
                    {open && <MobileNavigation toggleMenu={toggleMenu} />}
                </div>
                <CallToActionSection />

                <AboutSection />
                <ProjectSection />
   
        </div>
    );
}

export default App;
