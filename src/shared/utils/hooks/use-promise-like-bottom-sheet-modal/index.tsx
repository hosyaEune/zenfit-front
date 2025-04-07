import { useCallback, useRef } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { deepMerge } from "../../lib/deep-merge";
import { DEFAULT_MODAL_CREATE_PROPS } from "./const";
import type {
  PromiseLikeModalCreator,
  PromiseLikeModalCreatorProps,
  TRejectFun,
  TResolveFun,
  UsePromiseLikeModalReturnType,
} from "./types";

import { BottomSheetModal } from "@/shared/ui/bottom-sheet-modal";

export const usePromiseLikeBottomSheetModal =
  (): UsePromiseLikeModalReturnType => {
    const { open, onOpen, onClose } = useDisclosure();

    const refResolve = useRef<TResolveFun | null>(null);
    const refReject = useRef<TRejectFun | null>(null);

    const modalPropsRef = useRef<PromiseLikeModalCreatorProps>(
      DEFAULT_MODAL_CREATE_PROPS
    );

    const { renderComponent, renderFooter, modalProps, onCloseCb } =
      modalPropsRef.current;

    const createPromiseLikeModal = useCallback<PromiseLikeModalCreator>(
      (props: PromiseLikeModalCreatorProps) =>
        new Promise((resolve, reject) => {
          refResolve.current = resolve;
          refReject.current = reject;
          modalPropsRef.current = deepMerge(
            props,
            modalPropsRef.current
          ) as PromiseLikeModalCreatorProps;

          onOpen();
        }),
      [onOpen]
    );

    const onResolveHandler: TResolveFun = (reason) => {
      refResolve.current?.(reason);
      onClose();
    };

    const onRejectHandler: TRejectFun = (reason) => {
      refReject.current?.(reason);
      onClose();
    };
    // TODO: прокидывать сюда reason (причину закрытия)
    const onCloseHandler = () => {
      onCloseCb?.();
      onRejectHandler("backdropClick");
    };

    return [
      <BottomSheetModal
        {...modalProps}
        footer={renderFooter?.(onResolveHandler, onRejectHandler)}
        open={open}
        onClose={onCloseHandler}
      >
        {renderComponent(onResolveHandler, onRejectHandler)}
      </BottomSheetModal>,
      createPromiseLikeModal,
    ];
  };
