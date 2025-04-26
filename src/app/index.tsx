import { type FC } from "react";

import { Flex } from "@chakra-ui/react";
import { Route } from "wouter";

import { composeProviders } from "../shared/utils/lib/compose-providers";
import { ChakraProvider } from "./providers";

import { PATHS } from "@/@global/consts";
import { PageWithHeader } from "@/@global/wrappers/PageWithHeader";
import { PageWithNavigation } from "@/@global/wrappers/PageWithNavigation";
import { PageWithPadding } from "@/@global/wrappers/PageWithPadding";
import { App as AppSettings } from "@/@singleton/App";
import { Dashboard } from "@/pages/Dashboard";
import { History } from "@/pages/History";
import { Home } from "@/pages/Home";
import { Report } from "@/pages/Report";
import { Settings } from "@/pages/Settings";
import { InitCollectionInformation } from "@/proccesses/InitCollectionInformation";
import { Workout } from "@/proccesses/Workout";

type Props = {
  pleloadState?: typeof window.__PRELOAD_STATE__;
};

const App: FC<Props> = () => {
  AppSettings.getInstance().restoreSettings();
  AppSettings.getInstance().requestNoSleep();

  return (
    <Flex
      height="100dvh"
      width="100%"
      maxWidth={820}
      direction="column"
      overflow="hidden"
      margin="0 auto"
    >
      <Route
        path={PATHS.home}
        component={() => (
          <PageWithNavigation>
            <PageWithPadding>
              <PageWithHeader>
                <Home />
              </PageWithHeader>
            </PageWithPadding>
          </PageWithNavigation>
        )}
      />
      <Route path="/workout/:id" component={() => <Workout />} />
      <Route
        path={PATHS.settings}
        component={() => (
          <PageWithNavigation>
            <PageWithPadding>
              <PageWithHeader centerElement="settings">
                <Settings />
              </PageWithHeader>
            </PageWithPadding>
          </PageWithNavigation>
        )}
      />
      <Route
        path={PATHS.history}
        component={() => (
          <PageWithNavigation>
            <PageWithPadding>
              <PageWithHeader centerElement="history">
                <History />
              </PageWithHeader>
            </PageWithPadding>
          </PageWithNavigation>
        )}
      />
      <Route
        path={PATHS.collectionInformation}
        component={() => <InitCollectionInformation />}
      />
      <Route
        path={PATHS.report}
        component={() => (
          <PageWithNavigation>
            <PageWithPadding>
              <PageWithHeader centerElement="report">
                <Report />
              </PageWithHeader>
            </PageWithPadding>
          </PageWithNavigation>
        )}
      />
      <Route path={PATHS.dashboard} component={() => <Dashboard />} />
    </Flex>
  );
};

const AppWithProviders = composeProviders(ChakraProvider)(App);

export { AppWithProviders as App };
