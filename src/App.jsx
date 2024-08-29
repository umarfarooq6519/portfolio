import Home from "./components/Home";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

export default function App() {
  return (
    <section
      id="App"
      className="bg-secondary font-body text-primary p-6 text-base"
    >
      <Home />
      <Intro />
      <Contact />
    </section>
  );
}
