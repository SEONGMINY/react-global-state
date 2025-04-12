import { useEffect, useState } from "react";
import { count, increment, setStateFunctions } from "../store/countStore";

const Component1 = () => {
  const [state, setState] = useState(count);

  const onClickIncrement = () => {
    increment(1);
  };

  useEffect(() => {
    setStateFunctions.add(setState);

    return () => {
      setStateFunctions.delete(setState);
    };
  }, []);

  return (
    <div>
      <h1>Component1</h1>
      <p>{state}</p>
      <button onClick={onClickIncrement}>Increment</button>
    </div>
  );
};

export default Component1;
