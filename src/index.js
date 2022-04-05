import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { createRoot } from "react-dom/client";
import setAuthorization from "./utils/setAuthorizationToken";

const container = document.getElementById("root");
const root = createRoot(container);

setAuthorization(localStorage.getItem("link-token"));

root.render(
  <AuthProvider>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <App />
    </SnackbarProvider>
  </AuthProvider>
);
