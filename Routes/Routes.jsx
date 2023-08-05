import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/layout/Main";
import Home from './../src/Components/Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
    ],
  },
]);
