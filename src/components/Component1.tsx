import useStore from "../hooks/useStore";
import { countStore } from "../store/countStore";

const Component1 = () => {
  const [count, setCount] = useStore(countStore);

  return (
    <div>
      <h1>Component1</h1>
      <p>{count.count1}</p>
      <button
        onClick={() =>
          setCount((prev) => ({
            ...prev,
            count1: prev.count1 + 1,
          }))
        }
      >
        Increment
      </button>
    </div>
  );
};

export default Component1;
