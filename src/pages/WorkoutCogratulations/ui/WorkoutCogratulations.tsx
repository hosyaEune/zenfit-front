import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Span,
  Text,
} from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { AiFillClockCircle, AiFillFire } from "react-icons/ai";
import { TbBarbellFilled } from "react-icons/tb";
import { Link } from "wouter";

import { PageWithPadding } from "@/@global/wrappers/PageWithPadding";

type Props = {
  countExercises: number;
  expendSeconds: number;
  expendCalories: number;
};

const Item: FC<{
  icon: ReactNode;
  count: number;
  description: string;
}> = ({ icon, count, description }) => (
  <Flex flexDirection="column" align="center" gap={2}>
    {icon}
    <Span fontSize="xl" fontWeight="bold">
      {count}
    </Span>
    <Span>{description}</Span>
  </Flex>
);

export default function WorkoutCogratulations({
  countExercises,
  expendSeconds,
  expendCalories,
}: Props) {
  const items = [
    {
      icon: <TbBarbellFilled size={26} />,
      description: "extensions",
      count: countExercises,
    },
    {
      icon: <AiFillClockCircle size={26} />,
      description: "minutes",
      count: expendSeconds,
    },
    {
      icon: <AiFillFire size={26} />,
      description: "kkal",
      count: expendCalories,
    },
  ];

  return (
    <PageWithPadding alignItems="center" justifyContent="space-between">
      <Image src="/congratulations.png" alt="congratulations" height="55%" />
      <Flex direction="column" gap={8} alignItems="center">
        <Heading fontSize="xl" textTransform="capitalize">
          congratulations!
        </Heading>
        <Text fontSize="" textTransform="capitalize">
          you're completed the workout!
        </Text>
      </Flex>
      <Flex width="100%">
        {items.map((item) => (
          <Box key={item.description} flexBasis="33%">
            <Item {...item} />
          </Box>
        ))}
      </Flex>
      <Flex width="100%" gap={4}>
        <Button
          as={Link}
          // почему-то тип не работает
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to={PATHS.home}
          flex={1}
          background="blue.200"
          size="xl"
          rounded="full"
        >
          <Span textTransform="capitalize" color="blue">
            go to homepage
          </Span>
        </Button>
        <Button
          as={Link}
          flex={1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to={PATHS.report}
          background="blue"
          size="xl"
          rounded="full"
        >
          <Span textTransform="capitalize" color="white">
            view report
          </Span>
        </Button>
      </Flex>
    </PageWithPadding>
  );
}
