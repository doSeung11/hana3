//01/30
//PAGE 95

// 피보나치 수열을 memoization하여 출력하는 함수를 작성해 보세요.
// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
// fibonacci(5); // 5
// fibonacci(7); // 13

//걍 노가다
function fibonacci(n){  
    Cnt += 1
    if(n<=1) return n;
    return fibonacci(n-2) + fibonacci(n-1);
}

//캐시 + 클로저
function memoized0(fn){
    const memoizedTable = {};
    return function (k){
        return memoizedTable[k] || (memoizedTable[k]=fn(k));
    }
}

const memoizedFibonacci = memoized0(function(n){
    Cnt += 1
    if(n<=1) return n;
    return memoizedFibonacci(n-2)+memoizedFibonacci(n-1);
})

Cnt = 0;
const mf5 = memoizedFibonacci(5);
console.log("🚀 ~ mf5:", mf5, Cnt)
Cnt = 0;
const mf7 = memoizedFibonacci(7);
console.log("🚀 ~ mf7:", mf7, Cnt)

console.log("==================================")

//걍 노가다
function fibo_before(n){
    const d= [];  //d의 메모리 주소는 안 바뀌고, 힙에 데이터가 추가된다.
    for(let i=0;i<=n;i+=1){
        i<2? d.push(i) : d.push(d[i-1]+d[i-2]);
    }
    return d[n];
}

//캐시 > 그냥 함수 안에 선언한 걸 전역 처리한 거야.
const a= [];  //오염가능성 있음. 그래서 memoized 하는 거야.
function fibo(n){
    if(a.length>a) return a[n];

    else{
        for(let i=a.length;i<=n;i+=1){
            a.push(i<2?i:d[i-1]+d[i-2])
        }
        return a[n];
    }
}

//캐시 + 클로저
function memoized(fn){
    const cache = [];
    return function (k){  //anonymous
        return cache[k] || (cache[k] = fn(k));
    }
}

const mfibo = memoized(  //typeof mfibo => fucntion
    function (n){
        return n<2? n : mfibo(n-1)+mfibo(n-2);
    }
)


// 'memoized function' is anchored. Just implement for the 'fn'.

// const memoized = __fn__ => {
//     const cahce = {};
//     return k => cahce[k] || (cahce[k]=__fn__(k))
// }

// const memoizedFunc = memoized(__fn__)