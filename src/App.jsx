import "./App.css";
import { MainComponent } from "./components/MainComponent";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero1 from "./components/Hero1";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <>
      <Header />
      <Hero1 />
      <Quote />
      <MainComponent />

      <img
        className="w-screen h-screen object-cover"
        src="./assets/bg-imgs/mei.jpg"
        alt="Mei siting on the ground"
      />
      <About />
      <img
        className="w-screen h-screen object-cover"
        src="./assets/bg-imgs/howl-moving-castle.jpg"
        alt="Mei siting on the ground"
      />

      {/* <AboutSection /> */}
      <Footer />
    </>
  );
}
