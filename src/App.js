import {useState,  useEffect} from 'react'
import MobileNavigation from "./components/MobileNavigation";


import NavigationBar from "./components/NavigationBar";

import {AnimatePresence,} from "framer-motion"
import { LoaderExample } from './components/Loader';
import Body from './sections/Body';



function App() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    
   const toggleMenu = () => {
       setOpen((prevOpen) => !prevOpen);
    };
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])
    
    

    return (
        <div className="app  ">
            <AnimatePresence exitBeforeEnter onExitComplete={() =>setLoading(false)} >
                {loading && <LoaderExample />}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter >
            
                {!loading && (
                    <>
                        {" "}
                        <NavigationBar
                            open={open}
                            setOpen={setOpen}
                            toggleMenu={toggleMenu}
                        />
                        <AnimatePresence exitBeforeEnter>
                            {open && (
                                <MobileNavigation toggleMenu={toggleMenu} />
                            )}
                        </AnimatePresence>
                      <Body />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
