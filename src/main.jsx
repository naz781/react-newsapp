import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { NewsContextProvider } from "./context/NewsContext";

createRoot(document.getElementById("root")).render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>
);
