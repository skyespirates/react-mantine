import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Table from "./pages/Table";
import Animes from "./pages/Animes";
import Games from "./pages/Games";
import Movies from "./pages/Movies";
import Posts from "./pages/Posts";

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
        path: "table",
        element: <Table />,
      },
      {
        path: "animes",
        element: <Animes />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "posts",
        element: <Posts />,
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
    to: "/table",
    title: "table",
  },
  {
    to: "/animes",
    title: "animes",
  },
  {
    to: "/games",
    title: "games",
  },
  {
    to: "/movies",
    title: "movies",
  },
  {
    to: "/posts",
    title: "posts",
  },
];
