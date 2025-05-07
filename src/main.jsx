import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/layout/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./Layout/About/About.jsx";
import Contact from "./Layout/Contact/Contact.jsx";
import Projects from "./Layout/Projects/Project.jsx";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store/Store";
import Home from "./Layout/Home/Home.jsx";

// const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/Home" element={<Home />} />
//       <Route path="/About" element={<About />} />
//       <Route path="/Projects" element={<Projects />} />
//       <Route path="/Contact" element={<Contact />} />
//     </Route>
//   )
// );

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
