import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type Props = { children: ReactNode } & FlexProps;

export const PageWithPadding: FC<Props> = ({ children, ...props }) => (
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
