import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import ThemeProvider from "./theme/ThemeProvider.jsx";
import "./theme/theme.css";   // design tokens + transitions
import "./index.css";         // resets / base
import "./App.css";           // layout helpers (optional)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
