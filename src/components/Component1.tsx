import { useEffect, useState } from "react";

let count = 1;
const setStateFunctions = new Set<(count: number) => void>();

const Component1 = () => {
  const [state, setState] = useState(count);

  useEffect(() => {
    setStateFunctions.add(setState);

    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

  const increment = () => {
    count++;
    setStateFunctions.forEach((setState) => setState(count));
  };

  return (
    <div>
      <h1>Component1</h1>
      <p>{state}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Component1;
