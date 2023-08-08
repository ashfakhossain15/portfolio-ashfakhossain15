import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/layout/Main";
import Home from "./../src/Components/Pages/Home/Home";
import About from "../src/Components/Pages/About/About";
import Education from "../src/Components/Pages/Eudcation/Education";

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
    ],
  },
]);
