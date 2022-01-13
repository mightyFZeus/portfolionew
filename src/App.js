import {useState} from 'react'
import MobileNavigation from "./components/MobileNavigation";


import NavigationBar from "./components/NavigationBar";
import AboutSection from "./sections/AboutSection";
import CallToActionSection from "./sections/CallToActionSection";

function App() {
   const [open, setOpen] = useState(false);
   const toggleMenu = () => {
       setOpen((prevOpen) => !prevOpen);
   };
    
    

    return (
        <div className="app ">
            <NavigationBar
                open={open}
                setOpen={setOpen}
                toggleMenu={toggleMenu}
            />
            <div>{open && <MobileNavigation toggleMenu={toggleMenu} />}</div>
            <CallToActionSection />
          
            <AboutSection />
        </div>
    );
}

export default App;
