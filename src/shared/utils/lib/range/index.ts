export function range(stop: number): number[];
export function range(start: number, stop: number, step?: number): number[];
export function range(a: number, b?: number, c?: number): number[] {
  let start: number, stop: number, step: number;

  if (b === undefined) {
    start = 0;
    stop = a;
    step = 1;
  } else {
    start = a;
    stop = b;
    step = c === undefined ? 1 : c;
  }

  if (step === 0) {
    throw new Error("range() step argument must not be zero");
  }

  const result: number[] = [];

  if (step > 0) {
    for (let i = start; i < stop; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > stop; i += step) {
      result.push(i);
    }
  }

  return result;
}
