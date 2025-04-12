import { useCallback, useSyncExternalStore } from "react";
import { Store } from "../store/createStore";

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
};
export default useStoreSelector;
