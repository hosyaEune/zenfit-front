import { Center, Flex, Loader } from "@chakra-ui/react";
import { Link } from "wouter";

import { ITEMS } from "@/@global/mock";
import { WorkoutRow } from "@/entities/WorkoutRow";
import { useQuery } from "@/shared/utils/hooks/use-query";

export default function WorkoutList() {
  const { data } = useQuery({
    queryKey: "workouts",
    queryFn: async () => ITEMS,
  });

  if (!data) {
    return (
      <Center flex={1}>
        <Loader />
      </Center>
    );
  }

  return (
    <Flex direction="column" gap={4}>
      {(data ?? []).map((item) => (
        <Link to={`/workout/${item.id}`} key={item.id}>
          <WorkoutRow {...item} />
        </Link>
      ))}
    </Flex>
  );
}
