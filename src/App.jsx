import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
      <section
        id="App"
        className="layout bg-secondary py-6 font-body text-base text-primary"
      >
        <Header />
        <Outlet />
        <Footer />
      </section>
  );
}
