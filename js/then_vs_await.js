//02/07
//P274


//promi가 fetch
const promi = (pid) => new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('in-timer');
        resolve({pid})
    }, 1000)
})

const posts = [{id:1},{id:2},{id:3}];

function f1(pid){
    return promi(pid).then(r=>{  //then부분이 json
        console.log('r= ', r);
        return r.pid;
    })
}

async function f2(pid){ //f1이랑 같은 역할, then이나 await이나 같은 성능
    const obj = await promi(pid);
    return obj.pid;
}

console.time('xxxx');

const [x1,x2] = await Promise.all([f1(100)],[f2(200)]);  //all로 불러야 병렬이다.
console.log("🚀 ~ x1:", x1);
console.log("🚀 ~ x2:", x2);
//만약 각각 호출(f(100), f(200))했으면 직렬이야

const results = await Promise.all(posts.map(post => f1(post.id)));
console.log("🚀 ~ result:", results);