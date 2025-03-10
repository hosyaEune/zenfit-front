import { StrictMode } from "react";

import {
  renderToPipeableStream,
  type RenderToPipeableStreamOptions,
} from "react-dom/server";

import { App } from "./app";

export function render(_url: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StrictMode>
      <App />
    </StrictMode>,
    options
  );
}
