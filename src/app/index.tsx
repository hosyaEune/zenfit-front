import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { Route } from "wouter";

import { composeProviders } from "../shared/utils/lib/compose-providers";
import { ChakraProvider } from "./providers";

import { App as AppSettings } from "@/@singleton/App";
import { Home } from "@/pages/Home";
import { Workout } from "@/proccesses/Workout";

type Props = {
  pleloadState?: typeof window.__PRELOAD_STATE__;
};
// TODO: перенести
export const PageWithPadding: FC<{ children: ReactNode } & FlexProps> = ({
  children,
  ...props
}) => (
  <Flex
    direction="column"
    paddingX={5}
    paddingY={3}
    flex={1}
    overflow="hidden"
    {...props}
  >
    {children}
  </Flex>
);

const App: FC<Props> = () => {
  AppSettings.getInstance().requestNoSleep();
  AppSettings.getInstance().requestPermissions();

  return (
    <Flex
      height="100dvh"
      width="100%"
      direction="column"
      overflow="hidden"
      background="white"
    >
      <Route
        path="/"
        component={() => (
          <PageWithPadding>
            <Home />
          </PageWithPadding>
        )}
      />
      <Route path="/workout/:id" component={Workout} />
    </Flex>
  );
};

const AppWithProviders = composeProviders(ChakraProvider)(App);

export { AppWithProviders as App };
