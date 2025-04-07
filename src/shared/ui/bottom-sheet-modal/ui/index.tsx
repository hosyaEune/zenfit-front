import { Dialog, Separator } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

export type Props = {
  title?: ReactNode;
  children: ReactNode;
  open: boolean;
  footer?: ReactNode;
  onClose: () => void;
};

export const BottomSheetModal: FC<Props> = ({
  title,
  open,
  children,
  footer,
  onClose,
}) =>
  createPortal(
    <Dialog.Root
      placement="center"
      onOpenChange={(details) => {
        if (!details.open) {
          onClose();
        }
      }}
      open={open}
      scrollBehavior="outside"
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <Dialog.Backdrop height="100dvh" />
      <Dialog.Content
        position="fixed"
        bottom="0px"
        right="0"
        left="0"
        mb="0"
        borderTopStartRadius="3xl"
        borderTopEndRadius="3xl"
        borderBottomEndRadius="0"
        borderBottomStartRadius="0"
        width="100%"
      >
        {title && (
          <Dialog.Header textAlign="center" fontSize="3xl">
            {title}
            <Separator />
          </Dialog.Header>
        )}
        <Dialog.Body>{children}</Dialog.Body>
        {footer && <Dialog.Footer>{footer}</Dialog.Footer>}
      </Dialog.Content>
    </Dialog.Root>,
    document.body
  );
