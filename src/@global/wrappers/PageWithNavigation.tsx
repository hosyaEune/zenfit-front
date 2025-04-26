import { useState } from "react";

import { Button, Flex, Span } from "@chakra-ui/react";
import type { FC, ReactElement, ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "wouter";

import { PATHS } from "../consts";

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

type Props = {
  children: ReactNode;
};

export const PageWithNavigation: FC<Props> = ({ children }) => {
  const [location] = useLocation();

  const [activeButton, setActivateButton] = useState(
    MENU.find((item) => item.path === location)?.title ?? MENU[0].title
  );

  return (
    <Flex direction="column" flex={1} overflow="hidden">
      <Flex direction="column" flex={1} overflowY="auto">
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
