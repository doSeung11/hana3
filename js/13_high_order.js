const f1_org = function(f,val){
    return f(val); //fx1(2)
};

const f1 = (f,val) => f(val);

f1(console.log, 'abc');

function fx1(a){
    return a**2;
}

f1(fx1, 2)  //4
console.log("🚀 ~ f1(fx1, 2):", f1(fx1, 2))


const f2_org = function(f) {
    return function(...args){
        return f(...args);
    }
};
const f2 = (f) => {(...args) => f(...args);}
//const X = f2(Math.max)(1,2,3,4,5);
//console.log("🚀 ~ X:", X)

//Math.min(...[1,2,3,4,5]) > 1


//unary example: arg 무조건 하나
const arr_org = ['1','2','3'];
const arr = new Array('1','2','3');
const rets = arr.map(parseInt);
//static은 클래스 있으면 그냥 참조해서 바로 쓸 수 있는 거야.
//new로 객체를 생성하지 않아도!
/* 이게(map) static 함수래...
Array.prototype.map = function(f) 
{
    const result = [];
    for(let i=0;i<this.length;i+=1){
        result.push(f(this[i], i, this)); :여기서 this는 Array instance야
    }
}
*/
//arr.map(function(item, idx, this))
//parseInt('1',0,['1','2','3']);  //숫자, 진수, 배열?
//parseInt('2',1,['1','2','3']);
//parseInt('3',2,['1','2','3']);
console.log(rets); // [1, NaN, NaN];

//unary
const unary = fn => fn.length===1 ? fn : (arg)=>fn(arg);
const rets2 = arr.map(unary(parseInt));
console.log(rets2); //[1, 2, 3]