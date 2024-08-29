import Home from "./components/Home";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <section
      id="App"
      className="bg-secondary font-body text-primary p-5 text-base"
    >
      <Home />
      <Intro />
      <Contact />
      <Footer />
    </section>
  );
}
