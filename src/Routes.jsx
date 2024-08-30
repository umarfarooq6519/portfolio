import { createBrowserRouter } from "react-router-dom";

// ########### components
import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";

// ########### routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
