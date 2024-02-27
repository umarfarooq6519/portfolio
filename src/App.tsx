import HomePage from "./components/HomePage";
import Expertise from "./components/Expertise";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <section className="flex flex-col spacer layer1 gap-14 md:gap-20 tracking-wide  text-center  App text-base text-[#132043df] md:text-lg">
      <HomePage />
      <Expertise />
      <AboutPage />
      <ContactPage />
    </section>
  );
}

export default App;
