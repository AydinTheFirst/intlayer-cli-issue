import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlayerProvider } from "react-intlayer";

import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntlayerProvider>
      <App />
    </IntlayerProvider>
  </StrictMode>
);
