import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import "./i18n/index.ts";
import { HeaderComponent } from "./components/header.component.tsx";
import { Providers } from "./provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <HeaderComponent />
      <App />
    </Providers>
  </StrictMode>
);
