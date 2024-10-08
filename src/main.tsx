import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ToastProvider from "./provider/ToastProvider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider initTheme={false}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </BrowserRouter>
);
