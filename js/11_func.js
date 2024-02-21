//01/30
//PAGE 104 ~ 107

//Arguments는 객체가 아니고 실제로는 배열이야 
//Arguments= { '0': 'Lee' }
//[...Arguments] = [ 'Lee' ]
//근데 화살표 함수를 쓰면, arguments가 요란한 객체로 떨어져.
//사실 그래서 arguments는 잘 안 쓴대

function hello(name){
    console.log(`Hello, ${name}!`, arguments);
    return `Return: Hello, ${name}!`; //이거 없으면 return undefined;
}

hello('Hong');

const hi = hello; //hello의 주소값을 할당 받는다.
hi('Kim');
console.log(hi.length, hi.name);

function printFnReturnValue(...args){ //그냥 args 하면 첫번째 argument만 받는 거야.
    const [fn, nm]  = args;
    console.log(fn.name, fn(nm)); //이름을 받고 함수 실행
}
printFnReturnValue(hi, 'Lee');

//arguments는 파라미터 명시하지 않아도 항상 생겨.
function bye(){
    const [,name] = arguments;  //name = arguments[1]
    console.log(`Bye, ${name}!`);
}
bye('Hong', 'Kim');

console.log("==================================")

function f(n) {
    if (n.hasOwnProperty('id')) n.id += 1;
    else n += 1;
  }
  
  let n = 10;  //값 복사
  let nobj = { id: 10 };  //주소 복사(shallow copy)
  f(n);    // call by value
  f(nobj); // call by reference
  console.log(n, nobj);
  
console.log("==================================")

//JS에서는 오버라이딩, 오버로딩 안 돼.
function ff(a) { return a + 100; }
function ff(a, b) { return a + b; }
console.log(ff(10), ff(10, 20)); // NaN, 30
function ff(a, b = 100) { return a + b; }

console.log("==================================")

//함수 즉시 실행
(function () {
    console.log('IIFE');
})(); //(func)객체를 ()바로 실행 


async function af(){
    return 1;
}
const x = await af();  //async 함수 받을 때 await 필요해
//위 아래 두개 같아.
(async function af(){  //아님 걍 즉시실행하든가
    return 1;
})();