import { Flex } from "@chakra-ui/react";
import { Link } from "wouter";

import { ITEMS } from "@/@mock";
import { WorkoutRow } from "@/entities/WorkoutRow";
import { useQuery } from "@/shared/utils/hooks/use-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: "workouts",
    queryFn: async () => ITEMS,
  });

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
