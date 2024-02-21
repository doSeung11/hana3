//const s:number = 1;  //Cannot redeclare block-scoped variable 's'. hello.ts에서 쓰고 있어. (모듈화 전)

import { Y } from "./types";

const s: number = 1;
const str = 'abc';
console.log("🚀 ~ str:", str.replaceAll('a', 'A'));
let x:Y;

export {};  //모듈화하고 나서는 중복 선언 가능이야.