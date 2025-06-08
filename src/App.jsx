import "./App.css";
import { MainComponent } from "./components/MainComponent";
import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MeiSection from "./components/MeiSection";
import HowlSection from "./components/HowlSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Quote />
        <MainComponent />
        <MeiSection />
        <About />
        <HowlSection />
      </main>
      <Footer />
    </>
  );
}
