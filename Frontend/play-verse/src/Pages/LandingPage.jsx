import FeatureGames from "./PageComponents/FeatureGames";
import HeroSection from "./PageComponents/HeroSection";
import HowitWorks from "./PageComponents/HowItWorks";
import Navbar from "./PageComponents/Navbar";

function LandingPage(){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <FeatureGames/>
        <HowitWorks/>
        </>
    )
}

export default LandingPage;