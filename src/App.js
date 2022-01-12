import "./App.css";
import FadeInWhenVisible from "./components/FadeInWhenVisible";


import NavigationBar from "./components/NavigationBar";
import AboutSection from "./sections/AboutSection";
import CallToActionSection from "./sections/CallToActionSection";

function App() {
    return (
        <div className="app lg:px-32 px-6 py-10">
            <NavigationBar />
            <CallToActionSection />

                <AboutSection />
        </div>
    );
}

export default App;
