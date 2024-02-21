/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
};

const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const plusCount = () => setCount(count + 1);
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <CounterContext.Provider value={{ count, plusCount }}>
        {/* <App /> */}
        {children}
      </CounterContext.Provider>
    </>
  );
};

//const (count) = useConter(); 그래서 함수형으로 선언해야해.
export const useCounter = () => useContext(CounterContext);
