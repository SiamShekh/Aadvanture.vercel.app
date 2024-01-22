import { ParallaxProvider } from "react-scroll-parallax";
import AdvanceBanner from "./Hero/AdvanceBanner";
import "../../../src/index.css"
import Nav from "../../Components/Navigations/Nav";
import ListItem from "./ListItem_Banner/ListItem";
const Home = () => {
    return (
        <div className="">
            <Nav />
            <ParallaxProvider>
                <AdvanceBanner />
                <div className="mt-3">
                    <ListItem/>
                </div>
            </ParallaxProvider>
        </div>
    );
};

export default Home;