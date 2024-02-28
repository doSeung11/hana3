/* eslint-disable react-refresh/only-export-components */

import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

type ReducerAction = {
  type: string;
  payload?: number;
};

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

enum ACTION {
  PLUS = 'plus',
  MINUS = 'minus',
}

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  switch (
    type //type은 오타가 날 수가 있어서 enum을 쓰면 된다!
  ) {
    case ACTION.PLUS:
      return count + payload;
    case ACTION.MINUS:
      return count - payload;
    default:
      return count;
  }
};

export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  const plusCount = () => dispatch({ type: ACTION.PLUS });
  const minusCount = (payload: number = 1) =>
    dispatch({ type: ACTION.MINUS, payload });

  // const plusMinusCount = (flag: 1 | -1) => setCount((pre) => pre + flag);
  // const plusCount = () => setCount((pre) => pre + 1); // &100 => &200
  // const plusCount = useCallback(
  //   () => setCount((prevCount) => prevCount + 1),
  //   []
  // );
  // const minusCount = useCallback(
  //   () => setCount((prevCount) => prevCount - 1),
  //   []
  // );

  return (
    <CounterContext.Provider
      value={{
        count,
        plusCount,
        minusCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
