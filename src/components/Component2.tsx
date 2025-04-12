import useStore from "../hooks/useStore";
import { countStore } from "../store/countStore";

const Component2 = () => {
  const [count, setCount] = useStore(countStore);

  return (
    <div>
      <h1>Component2</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Component2;
