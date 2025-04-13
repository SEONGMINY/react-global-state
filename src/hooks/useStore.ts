import { useCallback, useSyncExternalStore } from "react";
import { Store } from "../store/createStore";

function useStore<T>(store: Store<T>): readonly [T, Store<T>["setState"]];
function useStore<T, U>(store: Store<T>, selector: (state: T) => U): U;

function useStore<T, U = T>(store: Store<T>, selector?: (state: T) => U) {
  const getState = useCallback(
    () => (selector ? selector(store.getState()) : store.getState()),
    [store, selector]
  );

  const state = useSyncExternalStore(store.subscribe, getState);

  if (selector) {
    return state;
  }

  return [state, store.setState] as const;
}

export default useStore;
