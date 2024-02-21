'use strict'
globalThis.y = 10; //var로 하면 여기선 모듈의 변수로 잡힌다. 
// this.y = 100;
function bfn(x){
    // y = 12;
    console.log(x, this?.y, globalThis.y);  //this -> globalThis, y: 전역
}
bfn(9); //9, 10

bfn.bind({y:999})(9); //9, 999

// const a_bfn = x => console.log(x, this.y); //여기서 this는 전역의 부모를 말한다.
// a_bfn(9); //9 undefined

// [cjs]
// 모듈 객체가 있고, 거기다가 박는 방식이야.
// 함수 안에서 this -> globalThis 
// const assert = require('assert'); : CJS -> 전역에서 this 쓰면 모듈 스코프
// module.export = {}

// [esm]
// 기본적으로 strict mode로 실행
// this 쓸 수 없음
// 모듈 객체가 없다.
// import assert from 'assert'; : ESM -> 모듈이 없다 전역에서 this 쓰면 에러나
// export {};