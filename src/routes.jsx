import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Animes from "./pages/Animes";
import Table from "./pages/Table";
import Games from "./pages/Games";

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
      {
        path: "animes",
        element: <Animes />,
      },
      {
        path: "table",
        element: <Table />,
      },
      {
        path: "games",
        element: <Games />,
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
  {
    to: "/animes",
    title: "animes",
  },
  {
    to: "/table",
    title: "table",
  },
  {
    to: "/games",
    title: "games",
  },
];
