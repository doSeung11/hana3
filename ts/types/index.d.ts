declare global {
    interface Window {
      gName: string;
    }
    
    interface Array<T> {
      first(): T;
    }
  }
  

type X = string | number;  //global
export type Y = string | number;  //module tab에 등록, import 해야 써