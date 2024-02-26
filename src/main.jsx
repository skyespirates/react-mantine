import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";

// redux
import { Provider } from "react-redux";
import store from "./utils/store.js";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./styles/layout.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
