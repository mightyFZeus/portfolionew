import "./App.css";


import NavigationBar from "./components/NavigationBar";
import AboutSection from "./sections/AboutSection";
import CallToActionSection from "./sections/CallToActionSection";

function App() {
    return (
        <div className="app lg:px-32 px-10 py-10">
            <NavigationBar />
            <CallToActionSection />
          
                <AboutSection />
            
           
        </div>
    );
}

export default App;
