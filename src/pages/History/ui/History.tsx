import { useState } from "react";

import { Box, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import type { FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DAYS_IN_WEEK = 7;
const WEEKS_COUNT = 6;

function getCalendarDays(current: dayjs.Dayjs) {
  const startOfMonth = current.startOf("month");
  const startDayOfWeek = startOfMonth.day();
  const prevMonthDaysCount = startDayOfWeek;
  const calendarStart = startOfMonth.subtract(prevMonthDaysCount, "day");
  const totalDays = DAYS_IN_WEEK * WEEKS_COUNT;

  return Array.from({ length: totalDays }).map((_, idx) =>
    calendarStart.add(idx, "day")
  );
}

const Calendar: FC<{
  selectedDay?: dayjs.Dayjs;
  onClick?: (date: dayjs.Dayjs) => void;
}> = ({ selectedDay = dayjs(), onClick }) => {
  const [current, setCurrent] = useState(() => dayjs());
  const days = getCalendarDays(current);

  const onNextHandler = () => setCurrent((d) => d.add(1, "month"));
  const onPrevHandler = () => setCurrent((d) => d.subtract(1, "month"));

  return (
    <Flex
      padding={4}
      flexDirection="column"
      gap={4}
      borderWidth={2}
      borderColor="gray.200"
      borderRadius="2xl"
    >
      <Flex justifyContent="space-between" align="center">
        <Text fontWeight="bold">{current.format("MMMM YYYY")}</Text>
        <Flex alignItems="center">
          <IconButton variant="ghost" onClick={onPrevHandler}>
            <AiOutlineLeft />
          </IconButton>
          <IconButton variant="ghost" onClick={onNextHandler}>
            <AiOutlineRight />
          </IconButton>
        </Flex>
      </Flex>
      <Grid gridTemplateColumns={`repeat(${DAYS_IN_WEEK}, 1fr)`}>
        {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((d) => (
          <GridItem rowSpan={2} colSpan={1} key={d}>
            <Box>
              <Text textAlign="center" fontWeight="bold">
                {d}
              </Text>
            </Box>
          </GridItem>
        ))}
        {days.map((date) => (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={date.format("YYYY-MM-DD")}
            borderRadius="full"
            aspectRatio={1}
            background={isSelectedDay(date) ? "blue" : undefined}
            color={isSelectedDay(date) ? "white" : undefined}
            border={isNowDay(date) ? "2px solid blue" : undefined}
            onClick={() => isSameMonth(date) && onClick?.(date)}
          >
            <Text color={isSameMonth(date) ? undefined : "gray.400"}>
              {date.date()}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );

  function isSameMonth(date: dayjs.Dayjs) {
    return date.month() === current.month();
  }

  function isSelectedDay(date: dayjs.Dayjs) {
    return (
      date.year() === selectedDay.year() &&
      date.month() === selectedDay.month() &&
      date.date() === selectedDay.date()
    );
  }

  function isNowDay(date: dayjs.Dayjs) {
    const now = dayjs();

    return (
      date.year() === now.year() &&
      date.month() === now.month() &&
      date.date() === now.date()
    );
  }
};

export default function History() {
  const [selectedDay, setSelectedDay] = useState(dayjs());

  return (
    <div>
      <Calendar selectedDay={selectedDay} onClick={setSelectedDay} />
    </div>
  );
}
