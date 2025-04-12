interface Store<T extends unknown> {
  state: T;
  setState: (newState: T) => void;
  subscribe: (callback: (state: T) => void) => () => void;
}

const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<(state: T) => void>();

  const setState = (newState: T) => {
    state = newState;
    callbacks.forEach((callback) => callback(state));
  };

  const subscribe = (callback: (state: T) => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  return { state, setState, subscribe };
};

export default createStore;
