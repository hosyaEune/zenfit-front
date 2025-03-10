import {
  renderToPipeableStream,
  type RenderToPipeableStreamOptions,
} from "react-dom/server";

import { App } from "./app";

export function render(_url: string, options?: RenderToPipeableStreamOptions) {
  const preloadState: typeof window.__PRELOAD_STATE__ = {
    hello: "world",
  };

  return renderToPipeableStream(<App />, {
    ...options,
    bootstrapScriptContent: `window.__PRELOAD_STATE__ = ${JSON.stringify(
      preloadState
    )}`,
  });
}
