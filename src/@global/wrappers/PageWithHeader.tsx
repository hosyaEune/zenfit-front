import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import type { Props as HeaderProps } from "@/widgets/Header";
import { Header } from "@/widgets/Header";

type Props = {
  children: ReactNode;
} & HeaderProps;

export const PageWithHeader: FC<Props> = ({ children, ...props }) => (
  <Flex direction="column" gap={4} flex={1} overflowY="auto">
    <Header {...props} />
    {children}
  </Flex>
);
