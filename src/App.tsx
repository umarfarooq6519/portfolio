import HomePage from "./components/HomePage";
import Expertise from "./components/Expertise";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="flex flex-col spacer layer1 gap-20 lg:gap-28  text-center  App text-base text-[#132043ef] md:text-lg">
      <HomePage />
      <hr />
      <AboutPage />
      <hr />
      <Expertise />
      <hr />
      <ContactPage />
      <Footer />
    </section>
  );
}

export default App;
