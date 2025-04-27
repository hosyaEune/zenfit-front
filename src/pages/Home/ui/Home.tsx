import { Flex } from "@chakra-ui/react";

import { BlockWithTitle } from "@/@global/wrappers/BlockWithTitle";
import { WorkoutList } from "@/widgets/WorkoutList";

export default function Home() {
  return (
    <Flex direction="column">
      <BlockWithTitle title="workout plan for you">
        <WorkoutList />
      </BlockWithTitle>
    </Flex>
  );
}
