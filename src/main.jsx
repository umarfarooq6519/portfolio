import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReactLenis } from "lenis/react"; //for smooth scroll

import router from "./Routes.jsx"; //page routes
import "./index.css"; //default styling

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>,
);
