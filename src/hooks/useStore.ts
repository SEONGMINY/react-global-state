import { useEffect, useState } from "react";
import { Store } from "../store/createStore";

const useStore = <T extends unknown>(store: Store<T>) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(setState);

    return () => {
      unsubscribe();
    };
  }, [store]);

  return [state, store.setState] as const;
};

export default useStore;
