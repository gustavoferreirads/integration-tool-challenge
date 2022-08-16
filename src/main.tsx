import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { GlobalStyle } from "@/styles";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </StrictMode>
);
