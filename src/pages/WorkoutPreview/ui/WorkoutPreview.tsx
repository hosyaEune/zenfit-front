import {
  Accordion,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  List,
  Span,
} from "@chakra-ui/react";
import type { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "wouter";

import type { Workout } from "@/@model";
import { PageWithPadding } from "@/app";
import { ImageWithLQIP } from "@/shared/ui/image-with-lqip";
import { TimeHelper } from "@/shared/utils/helpers/time-helper";

const Header: FC<{
  image: Workout["image"];
}> = ({ image }) => (
  <Box height={140} position="relative" zIndex={1}>
    <ImageWithLQIP
      {...image}
      alt="head"
      zIndex={0}
      inset={0}
      position="absolute"
    />
    <Flex
      zIndex={1}
      backgroundColor="rgba(0,0,0,0.4)"
      position="relative"
      height="100%"
      width="100%"
      alignItems="center"
      padding={6}
    >
      <IconButton
        as={Link}
        // почему-то не работает
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        to="/"
        zIndex={2}
        position="absolute"
        aria-label="back"
        variant="ghost"
      >
        <AiOutlineArrowLeft color="white" />
      </IconButton>
    </Flex>
  </Box>
);

const ExerciseRow: FC<Workout["sets"][number]["exercises"][number]> = ({
  exercise,
  type,
  count,
}) => (
  <Flex height={112} gap={4} alignItems="center">
    <Box height="100%" aspectRatio="1/1">
      <ImageWithLQIP borderRadius="lg" {...exercise.image} />
    </Box>

    <Flex direction="column" justifyContent="space-around" height="80%">
      <Span
        _firstLetter={{ textTransform: "uppercase" }}
        lineClamp={1}
        font-size="xl"
        fontWeight="bold"
      >
        {exercise.name}
      </Span>
      {type === "reps" ? (
        <Span>X{count}</Span>
      ) : (
        <Span>{TimeHelper.formatDuration(count)}</Span>
      )}
    </Flex>
  </Flex>
);

const SetItem: FC<Workout["sets"][number]> = ({ exercises, repeatCount }) => {
  const title = exercises.map((exercise) => exercise.exercise.name).join(", ");

  return (
    <Accordion.Root defaultValue={[title]} collapsible={true}>
      <Accordion.Item value={title}>
        <Accordion.ItemTrigger fontSize="md">
          <Span
            flex="1"
            lineClamp={1}
            _firstLetter={{ textTransform: "uppercase" }}
          >
            {title}
          </Span>
          <Span fontWeight="bold">X{repeatCount}</Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <List.Root gap={4}>
              {exercises.map((exercise) => (
                <List.Item ps={5} key={exercise.exercise.name}>
                  <ExerciseRow {...exercise} />
                </List.Item>
              ))}
            </List.Root>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const SetList: FC<{
  items: Workout["sets"];
}> = ({ items }) => (
  <Flex direction="column">
    {items.map((item, index) => (
      <SetItem key={index} {...item} />
    ))}
  </Flex>
);

export default function WorkoutPreview({
  onClick,
  image,
  name,
  sets,
}: { onClick: () => void } & Workout) {
  return (
    <Flex direction="column" flex={1} overflow="hidden">
      <Header image={image} />
      <PageWithPadding flex={1}>
        <Heading lineHeight={1.33} fontSize="3xl" fontWeight="bold">
          {name}
        </Heading>
        <Box
          flex={1}
          overflowY="scroll"
          mb={4}
          _scrollbar={{
            display: "none",
          }}
        >
          <SetList items={sets} />
        </Box>
        <Button onClick={onClick} background="blue" size="xl" rounded="full">
          <Span _firstLetter={{ textTransform: "uppercase" }} fontWeight="bold">
            start
          </Span>
        </Button>
      </PageWithPadding>
    </Flex>
  );
}
