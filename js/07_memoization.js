//01/29
let runCnt = 0;
function factorialBeforeMemoization(n){  //기본 함수
    runCnt += 1
    if(n==1) return 1;
    return n*factorialBeforeMemoization(n-1);
}

const memoizedTable = {};
//{5: 5*24, 4: 4*6, 3: 3*2, 2: 2*1}
function factorial(n){  //memoized version
    //비순수함수. 왜냐면 memoizedTable 오염될 수 있잖아.
    runCnt += 1;

    if(n==1) return 1;
    return memoizedTable[n] || 
    (memoizedTable[n]=n*factorial(n-1));
}

runCnt=0;
const f3 = factorial(3);
console.log("🚀 ~ f3:", f3, runCnt);
runCnt=0;
const f5 = factorial(5);
console.log("🚀 ~ f5:", f5, runCnt);
runCnt=0;
const f15 = factorial(15);
console.log("🚀 ~ f15:", f15, runCnt);

console.log("===============================================");

function memoized(fn){  //closure version
    const memoizedTable = {};
    return function(k){
        // if(memoizedTable[k]) return memoizedTable[k];
        // return (memoizedTable[k] = fn(k));
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    }
}

const memoizedFactorial = memoized(function(n) {
    runCnt += 1
    if(n==1) return 1;
    return n*memoizedFactorial(n-1);
});

runCnt=0;
const mf3 = memoizedFactorial(3);
console.log("🚀 ~ mf3:", mf3, runCnt);  //3
runCnt=0;
const mf5 = memoizedFactorial(5);
console.log("🚀 ~ mf5:", mf5, runCnt);  //2
runCnt=0;
const mf15 = memoizedFactorial(15);
console.log("🚀 ~ mf15:", mf15, runCnt);  //10