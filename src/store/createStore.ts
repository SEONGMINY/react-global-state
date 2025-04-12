interface Store<T extends unknown> {
  setState: (newState: T | ((prev: T) => T)) => void;
  getState: () => T;
  subscribe: (callback: (state: T) => void) => () => void;
}

const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<(state: T) => void>();

  const setState = (newState: T | ((prev: T) => T)) => {
    state =
      typeof newState === "function"
        ? (newState as (prev: T) => T)(state)
        : newState;
    callbacks.forEach((callback) => callback(state));
  };

  const getState = () => state;

  const subscribe = (callback: (state: T) => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  return { setState, getState, subscribe };
};

export default createStore;
