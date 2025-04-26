import { Box, Flex, Text } from "@chakra-ui/react";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { FaPersonRunning } from "react-icons/fa6";

export type Props = {
  leftElement?: ReactNode;
  centerElement?: ReactNode;
  rightElement?: ReactNode;
};

const TitleText: FC<PropsWithChildren> = ({ children }) => (
  <Text fontWeight="bold" fontSize={20} textTransform="capitalize">
    {children}
  </Text>
);

const DefaultLeftElement = () => <FaPersonRunning size={24} color="blue" />;

export default function Header({
  centerElement = "Zenfit",
  leftElement,
  rightElement,
}: Props) {
  return (
    <Flex alignItems="center" justifyContent="space-between" gap={2}>
      {leftElement ?? <DefaultLeftElement />}
      <Flex flex={1} justifyContent="center">
        {typeof centerElement === "string" ? (
          <TitleText>{centerElement}</TitleText>
        ) : (
          centerElement
        )}
      </Flex>

      {rightElement ?? (
        <Box opacity={0}>
          <DefaultLeftElement />
        </Box>
      )}
    </Flex>
  );
}
