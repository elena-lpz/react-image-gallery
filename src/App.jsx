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
      <main>
        <Hero1 />
        <Quote />
        <MainComponent />

        <img
          className="relative -bottom-1 w-screen h-80 md:h-auto object-cover bg-no-repeat"
          src="./assets/bg-imgs/mei.jpg "
          alt="Mei siting on the ground"
        />
        <About />

        <img
          className="relative -top-1 w-screen h-80 md:h-auto  object-cover bg-no-repeat -z-30"
          src="./assets/bg-imgs/howl-castle-blend.webp"
          alt="Howl's castle in the sky"
        />
      </main>
      <Footer />
    </>
  );
}
