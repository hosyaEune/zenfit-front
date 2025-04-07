import { type FC, type ReactNode, useState } from "react";

import type { FlexProps } from "@chakra-ui/react";
import { Button, Flex, Span } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link, Route, useLocation } from "wouter";

import { composeProviders } from "../shared/utils/lib/compose-providers";
import { ChakraProvider } from "./providers";

import { App as AppSettings } from "@/@singleton/App";
import { Dashboard } from "@/pages/Dashboard";
import { History } from "@/pages/History";
import { Home } from "@/pages/Home";
import { Report } from "@/pages/Report";
import { Settings } from "@/pages/Settings";
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

export const PATHS = {
  home: "/",
  report: "/report",
  history: "/history",
  settings: "/settings",
  dashboard: "/dashboard",
};

const MENU: {
  title: string;
  path: string;
  icon: ReactElement;
}[] = [
  {
    title: "home",
    path: PATHS.home,
    icon: <AiFillHome />,
  },
  {
    title: "report",
    path: PATHS.report,
    icon: <BsGraphUp />,
  },
  {
    title: "history",
    path: PATHS.history,
    icon: <FaHistory />,
  },
  {
    title: "settings",
    path: PATHS.settings,
    icon: <IoMdSettings />,
  },
];

export const PageWithNavigation: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [location] = useLocation();

  const [activeButton, setActivateButton] = useState(
    MENU.find((item) => item.path === location)?.title ?? MENU[0].title
  );

  return (
    <Flex direction="column" flex={1}>
      <Flex direction="column" flex={1} overflow="hidden">
        {children}
      </Flex>

      <Flex>
        {MENU.map(({ title, icon, path }) => {
          const isActive = title === activeButton;

          return (
            <Button
              key={title}
              as={Link}
              flex={1}
              flexDirection="column"
              paddingY={8}
              variant="ghost"
              onClick={() => setActivateButton(title)}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              to={path}
              color={isActive ? "blue" : undefined}
            >
              {icon}
              <Span textTransform="capitalize" fontSize="xs" fontWeight="bold">
                {title}
              </Span>
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

const App: FC<Props> = () => {
  AppSettings.getInstance().requestNoSleep();
  AppSettings.getInstance().requestPermissions();

  return (
    <Flex height="100dvh" width="100%" direction="column" overflow="hidden">
      <Route
        path={PATHS.home}
        component={() => (
          <PageWithNavigation>
            <PageWithPadding>
              <Home />
            </PageWithPadding>
          </PageWithNavigation>
        )}
      />
      <Route path="/workout/:id" component={Workout} />
      <Route
        path={PATHS.settings}
        component={() => (
          <PageWithNavigation>
            <Settings />
          </PageWithNavigation>
        )}
      />
      <Route
        path={PATHS.history}
        component={() => (
          <PageWithNavigation>
            <History />
          </PageWithNavigation>
        )}
      />
      <Route
        path={PATHS.report}
        component={() => (
          <PageWithNavigation>
            <Report />
          </PageWithNavigation>
        )}
      />
      <Route path={PATHS.dashboard} component={() => <Dashboard />} />
    </Flex>
  );
};

const AppWithProviders = composeProviders(ChakraProvider)(App);

export { AppWithProviders as App };
