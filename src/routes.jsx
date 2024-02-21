import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Todos from "./pages/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
    ],
  },
]);

export const links = [
  {
    to: "/",
    title: "home",
  },
  {
    to: "/todos",
    title: "todos",
  },
];
