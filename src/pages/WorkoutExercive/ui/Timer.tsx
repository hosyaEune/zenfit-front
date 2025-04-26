import { useEffect, useRef, useState } from "react";

import { Text } from "@chakra-ui/react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import type { FC } from "react";

import { TimeHelper } from "@/shared/utils/helpers/time-helper";

type Props = {
  count: number;
  stop?: boolean;
  onComplete?: () => void;
};

export const Timer: FC<Props> = ({ count, stop = false, onComplete }) => {
  const [remaining, setRemaining] = useState(count);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [, mm, ss] = TimeHelper.splitSeconds(remaining);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        if (!stop) {
          setRemaining((prev) => prev - 1);
        }
      }, 1000);
    }

    if (remaining === 0 && isRunning) {
      setIsRunning(false);
      onComplete?.();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remaining, onComplete, stop]);

  return (
    <Text color="black" fontSize="5xl">
      <NumberFlowGroup>
        <NumberFlow
          trend={-1}
          value={mm}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow
          prefix=":"
          trend={-1}
          value={ss}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
      </NumberFlowGroup>
    </Text>
  );
};
