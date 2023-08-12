import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/layout/Main";
import Home from "./../src/Components/Pages/Home/Home";
import About from "../src/Components/Pages/About/About";
import Education from "../src/Components/Pages/Education/Education";
import Skills from "../src/Components/Pages/Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);
