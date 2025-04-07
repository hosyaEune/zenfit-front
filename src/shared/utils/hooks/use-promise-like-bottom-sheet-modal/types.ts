import type { JSX, ReactNode } from "react";

import type { Props } from "@/shared/ui/bottom-sheet-modal";

export type PromiseLikeModalResolveReasons = "buttonClick";

export type PromiseLikeModalRejectReasons =
  | "buttonClick"
  | "backdropClick"
  | "escapeKeyDown"
  | "closerClick"
  | "errorResolve"
  | undefined;

export type TResolveFun = (value?: PromiseLikeModalResolveReasons) => void;
export type TRejectFun = (value: PromiseLikeModalRejectReasons) => void;

export type PromiseLikeModalCreatorProps = {
  renderComponent: (onResolve: TResolveFun, onReject: TRejectFun) => ReactNode;
  renderFooter?: (onResolve: TResolveFun, onReject: TRejectFun) => ReactNode;
  onCloseCb?: () => void;
  modalProps?: Omit<Props, "open" | "onClose" | "children">;
};

export type PromiseLikeModalCreator = (
  props: PromiseLikeModalCreatorProps
) => Promise<PromiseLikeModalRejectReasons>;

export type UsePromiseLikeModalReturnType = [
  JSX.Element,
  PromiseLikeModalCreator
];
