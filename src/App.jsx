import "./App.css";
import { MainComponent } from "./components/MainComponent";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Quote />
      <MainComponent />
      <img
        className="w-screen h-screen object-cover"
        src="public/assets/bg-imgs/mei.jpg"
        alt="Mei siting on the ground"
      />
      <About />
      <img
        className="w-screen object-cover fade-img"
        src="public/assets/bg-imgs/howl-moving-castle.jpg"
        alt="Howl's castle in the sky"
      />
      <Footer />
    </>
  );
}
