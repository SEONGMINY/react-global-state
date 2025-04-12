import useStoreSelector from "../hooks/useStoreSelector";
import { countStore } from "../store/countStore";

const storeCount2 = (state: ReturnType<typeof countStore.getState>) =>
  state.count2;

const Component2 = () => {
  const count2 = useStoreSelector(countStore, storeCount2);

  return (
    <div>
      <h1>Component2</h1>
      <p>{count2}</p>
    </div>
  );
};

export default Component2;
