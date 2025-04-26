import {
  Box,
  Button,
  createListCollection,
  Field,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  NumberInput,
  Portal,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";
import type { Control, ControllerRenderProps } from "react-hook-form";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

import { ExercisesMap } from "@/@global/mock";
import type { Workout } from "@/@global/types";
import { WorkoutDifficulty } from "@/@global/types";

const workoutDifficulties = createListCollection({
  items: Object.values(WorkoutDifficulty).map((name) => ({
    label: name,
    value: name,
  })),
});

const workoutExercises = createListCollection({
  items: Object.values(ExercisesMap).map(({ id, name: label }) => ({
    label,
    value: `${id}`,
  })),
});

const NumberInputHookForm: FC<{
  min: number;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
  placeholder: string;
  label: string;
}> = ({ field, placeholder, label, min }) => {
  const { onChange, onBlur, value, name } = field;

  return (
    <NumberInput.Root
      onValueChange={(e) =>
        onChange({
          target: {
            value: Number(e.value),
          },
        })
      }
      name={name}
      onBlur={onBlur}
      value={String(value)}
      min={min}
    >
      <NumberInput.Label>{label}</NumberInput.Label>
      <NumberInput.Input placeholder={placeholder} />
    </NumberInput.Root>
  );
};

export default function WorkoutDashboard() {
  const { register, control, handleSubmit } = useForm<Workout>({
    defaultValues: {
      id: Date.now(),
      name: "",
      averageDurationSeconds: 3000,
      difficulty: WorkoutDifficulty.Beginner,
      image: { src: "/stock-cell.png" },
      sets: [],
    },
  });

  const {
    fields: sets,
    append: appendSet,
    remove: removeSet,
  } = useFieldArray({
    control,
    name: "sets",
  });

  const onSubmit = (data: Workout) => {
    console.log("Workout Created ✅", data);
  };

  return (
    <Box width="500px" mx="auto" p={6}>
      <Heading mb={6}>Создание тренировки</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Field.Root>
            <Field.Label>Название тренировки</Field.Label>
            <Input placeholder="Название тренировки" {...register("name")} />
          </Field.Root>

          <Controller
            name="averageDurationSeconds"
            control={control}
            render={({ field }) => (
              <NumberInputHookForm
                label="Длительность тренировки (секунд)"
                placeholder="Длительность тренировки (секунд)"
                min={1}
                field={field}
              />
            )}
          />

          <Select.Root
            collection={workoutDifficulties}
            defaultValue={[workoutDifficulties.items[0].value]}
            width="full"
            {...register("difficulty")}
          >
            <Select.HiddenSelect />
            <Select.Label>Select difficulty</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select difficulty" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {workoutDifficulties.items.map((workoutDifficulty) => (
                    <Select.Item
                      item={workoutDifficulty}
                      key={workoutDifficulty.value}
                    >
                      {workoutDifficulty.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Heading size="md">Сеты</Heading>

          {sets.map((set, setIndex) => (
            <Box key={set.id} borderWidth={1} p={4} borderRadius="md">
              <Flex justify="space-between" align="center" mb={2}>
                <Text>Сет {setIndex + 1}</Text>
                <IconButton
                  aria-label="Удалить сет"
                  onClick={() => removeSet(setIndex)}
                  bg="red"
                >
                  <FaRegTrashAlt />
                </IconButton>
              </Flex>

              <Controller
                name={`sets.${setIndex}.restSeconds`}
                control={control}
                render={({ field }) => (
                  <NumberInputHookForm
                    label="Отдых (секунд)"
                    placeholder="Отдых (секунд)"
                    min={0}
                    field={field}
                  />
                )}
              />

              <Controller
                name={`sets.${setIndex}.repeatCount`}
                control={control}
                render={({ field }) => (
                  <NumberInputHookForm
                    field={field}
                    min={1}
                    label="Повторов сета"
                    placeholder="Повторов сета"
                  />
                )}
              />

              <FieldExercises control={control} setIndex={setIndex} />
            </Box>
          ))}

          <Button
            onClick={() =>
              appendSet({ restSeconds: 60, repeatCount: 4, exercises: [] })
            }
          >
            Добавить сет
          </Button>

          <Button bg="green" type="submit">
            Создать тренировку
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

// 🎯 Компонент для добавления упражнений внутри сета
function FieldExercises({
  control,
  setIndex,
}: {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  control: Control<Workout, any, Workout>;
  setIndex: number;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sets.${setIndex}.exercises`,
  });

  return (
    <Box mt={4}>
      {fields.map((field, index) => (
        <Flex key={field.id} gap={2} align="center" mb={2} direction="column">
          <Controller
            control={control}
            name={`sets.${setIndex}.exercises.${index}.exercise`}
            render={({ field }) => (
              <Select.Root
                collection={workoutExercises}
                width="full"
                name={field.name}
                value={[String(field.value.id)]}
                onValueChange={({ value }) => {
                  const id = value[0];
                  const exercise = Object.values(ExercisesMap).find(
                    (ex) => ex.id === Number(id)
                  );

                  field.onChange(exercise);
                }}
                onInteractOutside={() => field.onBlur()}
              >
                <Select.HiddenSelect />
                <Select.Label>Упражнения</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select Exercise" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {workoutExercises.items.map((ex) => (
                        <Select.Item item={ex.value} key={ex.value}>
                          {ex.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />

          <Flex align="center" gap={8} alignItems="center">
            <Controller
              name={`sets.${setIndex}.exercises.${index}.count`}
              control={control}
              render={({ field }) => (
                <NumberInputHookForm
                  label="Кол-во"
                  placeholder="Кол-во"
                  min={1}
                  field={field}
                />
              )}
            />

            <Controller
              name={`sets.${setIndex}.exercises.${index}.type`}
              control={control}
              render={({ field }) => {
                const { value, name, onChange } = field;

                return (
                  <RadioGroup.Root
                    name={name}
                    value={value}
                    onValueChange={({ value }) => {
                      onChange(value);
                    }}
                  >
                    <HStack gap="6">
                      {["reps", "time"]
                        .map((item) => ({
                          label: item,
                          value: item,
                        }))
                        .map((item) => (
                          <RadioGroup.Item key={item.value} value={item.value}>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>
                              {item.label}
                            </RadioGroup.ItemText>
                          </RadioGroup.Item>
                        ))}
                    </HStack>
                  </RadioGroup.Root>
                );
              }}
            />
          </Flex>

          <IconButton
            aria-label="Удалить упражнение"
            onClick={() => remove(index)}
            width="full"
            bg="red"
          >
            <FaRegTrashAlt />
          </IconButton>
        </Flex>
      ))}
      <Button
        size="sm"
        onClick={() =>
          append({
            type: "reps",
            count: 60,
            exercise: ExercisesMap["приседания"],
          })
        }
        width="full"
      >
        <IoAddCircleOutline /> Добавить упражнение
      </Button>
    </Box>
  );
}
