// function Promise(cb){
//     const thenFns=[];
//     const catchFns = [];
//     const finalFns = [];

//     cb(succ => thenRecur(succ), err=>catchRecur(err));

//     Promise.prototype.then = fn => {
//         thenFns.push(fn); return this;
//     }

//     Promise.prototype.catch = fn => {
//         catchFns.push(fn); return this;
//     }

//     Promise.prototype.finally = fn => {
//         finalFns.push(fn); return this;
//     }

//     //catchRecur 등등 prototype 안 붙인 애들은 내부에서만 쓰겠다.
//     const finalRunner = () => {  
//         for(const f of finalFns) f();
//     }
    
//     const catchRecur = preErr => {
//         this.state = 'rejected';
//         const fn = catchFns.shift();
//         if(!fn){
//             finalRunner();
//             if(preErr instanceof Error) throw preErr;
//             else throw new Error(preErr);
//         }
//         try{
//             fn(preErr);
//             return finalRunner();
//         } catch(error){
//             catchRecur(error);
//         }
//     };

//     const thenRecur = preRet => {
//         const fn = thenFns.shift();
//         if(!fn){
//             this.state = 'fulfilled';
//             return finalRunner();
//         }

//         if(preRet instanceof Promise){
//             preRet.then(res=>{
//                 const r = fn(res);
//                 console.log('r: ', r);
//                 r.catch(e=>{
//                     catchRecur(e);
//                 });
//             })
//             .then(thenRecur)
//             .catch(err => {
//                 catchRecur(err);
//             });
//         } else{
//             try{
//                 const ret = fn(preRet);
//                 thenRecur(ret);
//             } catch(error){
//                 catchRecur(error);
//             }
//         }
//     };

//     this.state = 'pending'; -> bg에 있는 상태. tq에 못 온 상태
// settled -> then이든 error든 결과가 나온 상태
// }

//이렇게 프로토타입이 아니라 클래스로 짜면 바인딩 문제가 있다.

//cb(this.reslove.bind(this); this.reject.bind(this);)
//then은 this를 return: builder pattern
//그래서 .then / .catch 이 가능하다.



//randTime) date.js -> timeutils.js
//import {rand} from './utils/index.js'
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const randTime = new Promise((resolve, reject) => {  //reject는 생략해도 된다~
    const sec = rand(1,4)*500;
    setTimeout(() => resolve(sec), sec);
});


const randTime1 = () => new Promise((resolve, reject) => {  //reject는 생략해도 된다~
    const sec = rand(1,4)*500;
    setTimeout(() => resolve(sec), sec);
});


const isParallel = true;
if(isParallel) {
    Promise.all([randTime1(), randTime1(), randTime1()])
    .then(()=>console.timeEnd('promi'));  //동시 실행
} else{
    randTime1()
    .then(x => {
        console.log(x);
        return randTime();
    })
    .then(x => {
        console.log(x);
        return randTime();
        //화살표 함수 아니면 평가 후에 바로 실행되거든?
        //그래서 이렇게 해서 then일 때만 실행될 수 있도록 하는 거야.
    }).then(() => console.timeEnd('promi'))
}

