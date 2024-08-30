import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage";
import About from "./components/About";

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
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

export default router;
