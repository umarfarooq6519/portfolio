import HomePage from "./components/HomePage";
import Expertise from "./components/Expertise";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <section className="flex spacer layer1  flex-col gap-14 md:gap-20 tracking-wide text-center md:tracking-wider App text-base text-[#132043] md:text-lg">
      <HomePage />
      <Expertise />
      <AboutPage />
    </section>
  );
}

export default App;
