import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <section
      id="App"
      className="bg-secondary layout font-body text-primary p-5 text-base"
    >
      <Header />
      {/* <HomePage /> */}
      <Outlet />

      <Footer />
    </section>
  );
}
