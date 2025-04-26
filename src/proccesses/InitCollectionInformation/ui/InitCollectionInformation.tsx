import { useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { range } from "@/shared/utils/lib/range";

type NumberPickerProps = {
  min: number;
  max: number;
  showCount: number;
  postfix?: string;
  prefix?: string;
  onChange?: (value: number) => void;
};

export const NumberPicker: React.FC<NumberPickerProps> = ({
  min,
  max,
  showCount,
  postfix,
  prefix,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fakeElems = useRef<HTMLDivElement[]>([]);
  const [currentCentredIdx, setCurrentCentredIdx] = useState(
    Math.floor(showCount / 2)
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (!containerRef.current) return;

      const typedElem = e.target as HTMLDivElement;
      const heightOneElem = containerRef.current.offsetHeight / showCount - 1;

      const skipedElements = Math.floor(typedElem.scrollTop / heightOneElem);
      const delta = Math.floor(showCount / 2);
      const centedIdx = skipedElements + delta;
      setCurrentCentredIdx(centedIdx);
      const centredElem = typedElem.childNodes[centedIdx];

      const number = centredElem.textContent
        ?.replace(new RegExp(`${prefix}|${postfix}`, "gi"), "")
        .trim();

      onChange?.(Number(number));
    }, 300);
  };

  return (
    <Box
      ref={(ref?: HTMLDivElement) => {
        if (!ref) return;

        const percent = Math.floor(showCount / 2);

        fakeElems.current.forEach(
          (el) => (el.style.height = `${(100 / showCount) * percent}%`)
        );

        containerRef.current = ref;
      }}
      onScroll={handleScroll}
      height="100%"
      overflowY="scroll"
      scrollSnapType="y mandatory"
      WebkitOverflowScrolling="touch"
      position="relative"
      _scrollbar={{
        display: "none",
      }}
    >
      <Box
        ref={(el?: HTMLDivElement) => {
          if (!el) return;

          fakeElems.current[0] = el;
        }}
      ></Box>
      <Box height="100%" width="70%" margin="0 auto">
        {range(min, max).map((value, idx) => {
          const isActive = currentCentredIdx === idx + 2;

          return (
            <Box
              key={value}
              height={`${100 / showCount}%`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              scrollSnapAlign="center"
              opacity={value !== null ? 1 : 0}
              {...(isActive
                ? {
                    borderTop: "2px solid blue",
                    borderBottom: "2px solid blue",
                  }
                : {})}
            >
              <Flex
                gap={2}
                alignItems="center"
                color={isActive ? "blue" : undefined}
              >
                {prefix && <Text>{prefix}</Text>}
                <Text fontSize={`${2}em`}>{value}</Text>
                {postfix && <Text>{postfix}</Text>}
              </Flex>
            </Box>
          );
        })}
      </Box>
      <Box
        ref={(el?: HTMLDivElement) => {
          if (!el) return;

          fakeElems.current[1] = el;
        }}
      ></Box>
    </Box>
  );
};

const STEPS = Array(10).fill(0);

export default function InitCollectionInformation() {
  const methods = useForm();

  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const handlePrev = () => {
    setCurrentStepIdx((prev) => prev - 1);
  };

  const handleSkip = () => {
    setCurrentStepIdx((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentStepIdx((prev) => prev + 1);
  };

  const handleFinish = () => {};

  const handleCancel = () => {};

  return (
    <FormProvider {...methods}>
      <Flex as="form" flex={1} flexDirection="column" overflow="hidden">
        <Flex height="40px" alignItems="center" width="100%">
          <IconButton
            zIndex={2}
            aria-label="back"
            variant="ghost"
            onClick={currentStepIdx === 0 ? handleCancel : handlePrev}
          >
            <AiOutlineArrowLeft color="black" />
          </IconButton>
          <Box flex={1}>
            <Progress.Root
              value={currentStepIdx}
              max={STEPS.length}
              size="lg"
              variant="outline"
              animated={true}
            >
              <Progress.Track borderRadius="xl" background="gray.100">
                <Progress.Range background="blue" />
              </Progress.Track>
            </Progress.Root>
          </Box>
          <Text>
            {currentStepIdx + 1}/{STEPS.length}
          </Text>
        </Flex>
        <Box flex={1} overflow="hidden">
          <NumberPicker
            min={1}
            max={100}
            onChange={(value) => console.log(value)}
            showCount={5}
            postfix="years"
          />
        </Box>
        <Flex height="40px">
          <Button onClick={handleSkip}>Skip</Button>
          <Button
            onClick={
              currentStepIdx === STEPS.length - 1 ? handleFinish : handleNext
            }
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
}
