import {
  renderToPipeableStream,
  type RenderToPipeableStreamOptions,
} from "react-dom/server";
import type { BaseLocationHook } from "wouter";
import { Router } from "wouter";

import { App } from "./app";

export function render(_url: string, options?: RenderToPipeableStreamOptions) {
  const preloadState: typeof window.__PRELOAD_STATE__ = {
    hello: "world",
  };

  return renderToPipeableStream(
    // TODO:
    <Router hook={(() => ["/", () => {}]) as BaseLocationHook}>
      <App />
    </Router>,
    {
      ...options,
      bootstrapScriptContent: `window.__PRELOAD_STATE__ = ${JSON.stringify(
        preloadState
      )}`,
    }
  );
}
