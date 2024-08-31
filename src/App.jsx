import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <section
      id="App"
      className="bg-secondary layout font-body text-primary px-4 py-6 text-base lg:max-xl:p-8"
    >
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
