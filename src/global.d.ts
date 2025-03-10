export {};

type PreloadState = Record<string, unknown>;

declare global {
  interface Window {
    __PRELOAD_STATE__?: PreloadState;
  }
}
