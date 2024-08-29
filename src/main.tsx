import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FormContextProvider } from "./context/FormContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider initTheme={false}>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
