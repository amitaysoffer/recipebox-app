import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RecipeboxProvider from "./context/RecipeboxContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecipeboxProvider>
      <App />
    </RecipeboxProvider>
  </React.StrictMode>
);
