export let count = 0;
export const setStateFunctions = new Set<(count: number) => void>();

export const increment = (value: number) => {
  count += value;
  setStateFunctions.forEach((setState) => setState(count));
};
