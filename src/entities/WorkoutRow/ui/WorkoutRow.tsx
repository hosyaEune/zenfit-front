import { Box, Flex, Image, Text } from "@chakra-ui/react";

import type { Workout } from "@/@model";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";

type Props = Pick<
  Workout,
  "name" | "averageDurationSeconds" | "difficulty" | "image"
>;

export default function WorkoutRow({
  name,
  difficulty,
  averageDurationSeconds,
  image,
}: Props) {
  return (
    <Box
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: 2,
        background: "blackAlpha.400",
      }}
      height={140}
      overflow="hidden"
      borderRadius="lg"
    >
      <Image
        position="absolute"
        width="100%"
        height="100%"
        objectFit="cover"
        inset={0}
        zIndex={1}
        src={image.src}
      />
      <Flex
        direction="column"
        justify="space-between"
        zIndex={2}
        position="relative"
        padding={6}
        height="100%"
        color="white"
      >
        <Text fontSize="2xl" maxLines={1}>
          {name}
        </Text>
        <Flex gap={2} fontSize="sm" textShadow="2px 2px 5px rgba(0, 0, 0, 0.5)">
          <Text>{TimeHelper.formatDuration(averageDurationSeconds)}</Text>
          <Text>&#9679;</Text>
          <Text textTransform="uppercase">{difficulty}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
