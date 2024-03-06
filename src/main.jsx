import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";

// redux
import { Provider } from "react-redux";
import store from "./utils/store.js";

// tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";

import "./styles/layout.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <MantineProvider defaultColorScheme="dark">
          <RouterProvider router={router} />
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
