import { StrictMode } from "react";

import { hydrateRoot } from "react-dom/client";

import { App } from "./app";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <App pleloadState={window?.__PRELOAD_STATE__ ?? {}} />
  </StrictMode>
);
