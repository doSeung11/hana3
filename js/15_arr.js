const arr = [1,2,3];
console.log("🚀 ~ arr:", arr);
console.log("🚀 ~ arr:", {...arr});
console.log("🚀 ~ arr:", arr.entries());
console.log("🚀 ~ arr.length:", arr.length);

arr.length = 5;
console.log("🚀 ~ arr:", arr); //arr: [ 1, 2, 3, <2 empty items> ]

const a = Array(3);
console.log("🚀 ~ a:", a);

const ar2 = Array(5).fill(1);
ar2.fill('X',-4,-2); //[ 1, 'X', 'X', 1, 1 ]
console.log("🚀 ~ ar2:", ar2);

arr.length = 3;
const ar3 = Array.from([...arr,4,5]); //shallow copy
arr[1] = 22;
console.log("🚀 ~ ar3:", ar3);

const ar4 = Array.from(Array(5), (_,i)=>i+1);  
//Array(5) = {length:5}
//(_,i) => i+1 : item(undefined), index, return(value) 
console.log("🚀 ~ ar4:", ar4);

const ar5 = Array.from(Array(5).keys()); 
//key는 index, 만약 values하면 undefined, entries면 [[0, undefined], [1, undefined]...]
console.log("🚀 ~ ar5:", ar5);

const ar6 = [...'abcdef'];
console.log("🚀 ~ ar6:", ar6);

const ar7 = 'ab,cd'.split(',');
console.log("🚀 ~ ar7:", ar7);

//[un]
//shift & unshift : 왼쪽 작업
const ar8 = [1,2,3];
ar8.shift();  //[2,3] 왼쪽에서 빠진다.
ar8.unshift(4);  //[4,2,3] 왼쪽에 추가된다.
ar8.unshift(6, 5);  //[6,5,4,2,3] 나중에 쓴 게 먼저 들어간다.
console.log("🚀 ~ ar8:", ar8);  //ar8: [ 44, 4, 2, 3 ]

console.log("========================");
//push & pop : 오른쪽 작업
const stack = [];
stack.push(1);  //stack.unshift(1)
stack.push(2,3);  //[1,2,3] //stack.unshift(3,2) [3,2,1]
console.log(stack);
console.log(stack.pop());  //stack.shift()
stack.length = 0; //stack 비우기

console.log("========================");
const queue = [];
queue.push(1);  //[1]
queue.push(2,3);  //[1,2,3]
console.log(queue.shift());  //[2,3] 왼쪽에서 빠진다.
console.log(queue);


console.log("========================");

const orr = [{id:1}, {id:2}, {id:1}];
orr.findIndex( (item, idx) =>
                        item.id === 1 );

orr.findLastIndex( (item, idx) => 
                       item.id === 1 );

//const overId1 = orr.filter(item => item.id >1);  //true면 담고 false면 씹힌다.
//const overId2 = orr.filter(item,idx => item.id >1);
// {id:?} 가 item


console.log("========================");

const a22 = [2,22];
function myConcat(...args){
    const argsArr = Array.isArray(args[0])? args[0] : args;
    return [...a22, ...argsArr];
}
const a22_1 = myConcat(3,33);
console.log(a22_1);
const a22_2 = myConcat([3,33]);
console.log(a22_2);

console.log("=============================")

// Unicode 정렬, cb: callback function
//TimSort = merge + quick

//https://velog.io/@dadak/JS%EA%B3%A0%EC%B0%A8%ED%95%A8%EC%88%98callback%ED%95%A8%EC%88%98sort-%EB%AC%B8%EC%A0%9C%EC%99%80-%ED%95%9C%EA%B3%84
a5 = [1, 5, 4, 11, 7];
console.log(a5.sort()); // a5 = [1, 11, 4, 5, 7]
console.log(a5.sort((a,b) => {
    console.log('a,b=',a,b);
    return a>b?1:-1; // return a-b(), return b-a(역순)
}))


console.log("==============================");
//PAGE 129
const arrr = [1,2,3,4,5];
console.log(arrr);

//splice(sIdx, cnt, ...appends): sIdx부터 cnt개 제거 후, appends 추가

//ex1) [2,3]을 추출
console.log(arrr.slice(1,3));
//ex2) [3]부터 다 추출
console.log(arrr.slice(2));
//ex3) [2,3,4] 제거
arrr.splice(1,3);
console.log(arrr);
//ex4) 복원
arrr.splice(1,0,2,3,4);
console.log(arrr);
//ex5) [3]부터 끝까지 제거
arrr.splice(2);
console.log(arrr);
//ex6) 복원
arrr.splice(2,0,3,4,5);
console.log(arrr);
//ex7) [1,2,'x','y','z',4,5] 만들기
//arrr.splice(2,1,'x','y','z');
//console.log(arrr);

//ex8) 위 7번 문제를 splice를 사용하지 말고 해보기
//원래 것을 잘라와서 풀어내고 다시 붙인다.
const arrr_new = [...(arrr.slice(0,2)),'x','y','z',...(arrr.slice(-2))]
console.log(arrr_new);


console.log("=======================");
// [ [1,1], [16, 2], [81, 3] ]
const flat1 = [1, 4, 9].map(a => 
    [a ** 2, Math.sqrt(a)]);
const flat2 = [1, 4, 9].map(a => 
    [a ** 2, Math.sqrt(a)]).flat();
const flat3 = flat1.flat();

const flat5 = [1, 4, 9].flatMap(a =>
    [[a ** 2], [Math.sqrt(a)]]);
const flat6 = flat5.flat(Infinity);


//Array.reduce(cb(현재누산된값, item) => 누산, 초기값)
let sum1 = 0;
for (let item of arr ){ sum1 += item};
const sum2 = arr.reduce((sum2, item)=> sum2+item, 0);

const users = [{ id: 1, name: 'Hong' }, { id: 20, name: 'Kim' }, { id: 3, name: 'Lee' } ];
//users.reduce( (s, user) => `${s} ${user.name}`,  '');
const namestr = users.reduce((acc,item) => `${acc}${acc?' ':''}${item.name}`,'');
console.log(namestr);


//PAGE 132
//ex) obj1, obj2, obj3를 reduce를 이용하여 합쳐보세요.
const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];
//⇒ {id: 1, name: 'Hong', addr: 'Seoul'}
const ret = objs.reduce((acc, item) =>({...acc, ...item}),{});
console.log(ret);
//assert.deepStrictEqual(objs, { id: 5, name: 'Hong', addr: 'Seoul' });

//02/01
//PAGE 133

//PAGE 134


//PAGE 135
//다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
//→ 배열의 각 요소를 제곱   n => n ** 2            [square]
// → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// → 배열의 각 요소를 세제곱  n => n ** 3            [cube]
//const arr = [1, 2, 3, 4, 5];
//cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
// TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.