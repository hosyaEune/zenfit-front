/* eslint react-refresh/only-export-components: 0 */
"use client";

import {
  createToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  Toaster as ChakraToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
});

export const Toaster = () => (
  <Portal>
    <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
      {(toast) => (
        <Toast.Root width={{ md: "sm" }}>
          {toast.type === "loading" ? (
            <Spinner size="sm" color="blue.solid" />
          ) : (
            <Toast.Indicator />
          )}
          <Stack gap="1" flex="1" maxWidth="100%">
            {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
            {toast.description && (
              <Toast.Description>{toast.description}</Toast.Description>
            )}
          </Stack>
          {toast.action && (
            <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
          )}
          {toast.meta?.closable && <Toast.CloseTrigger />}
        </Toast.Root>
      )}
    </ChakraToaster>
  </Portal>
);
