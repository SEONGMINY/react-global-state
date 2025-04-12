export let count = 0;
export const setStateFunctions = new Set<(count: number) => void>();
export const increment = () => {
  count++;
  setStateFunctions.forEach((setState) => setState(count));
};
