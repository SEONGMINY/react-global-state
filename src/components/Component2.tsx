import useStore from "../hooks/useStore";
import { countStore } from "../store/countStore";

const Component2 = () => {
  const count2 = useStore(countStore, (state) => state.count2);

  return (
    <div>
      <h1>Component2</h1>
      <p>{count2}</p>
    </div>
  );
};

export default Component2;
