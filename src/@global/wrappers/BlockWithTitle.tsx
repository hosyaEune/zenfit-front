import { Flex, Text } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const BlockWithTitle: FC<Props> = ({ children, title }) => (
  <Flex direction="column" gap={4} overflowY="auto">
    <Text fontWeight="semibold" fontSize={18} textTransform="capitalize">
      {title}
    </Text>
    {children}
  </Flex>
);
