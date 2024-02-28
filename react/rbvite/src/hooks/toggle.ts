import { useReducer } from 'react';

//반대로 처리
export const useToggle = (defaultFlag: boolean = false) => {
  // const [flag, setFlag] = useState(defaultFlag);
  // const makeToggle = () => {
  //   //setFlag((flag) => !flag);
  //   setFlag(!flag);
  // };

  const [flag, makeToggle] = useReducer((pre) => !pre, defaultFlag);
  return [flag, makeToggle] as const;
};
