import fetch from 'node-fetch';

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const sampleUrl2 = 'https://jsonplaceholder.typicode.com/posts/1';
const myFetch = url => fetch(url).then(res => res.json());

// myFetch를 이용하는 코드
myFetch(sampleUrl).then(user => {
  console.log('user>>>', user);
});


const isAsyncAwait = true;

//둘의 소요시간은 같다.
if(isAsyncAwait) {  //aysnc await, 어싱크는 프로미스를 반환
    const res = await fetch(sampleUrl);
    const data = await res.json();
    console.log("🚀 ~ data:", data);
    
}else{  //fetch
    fetch(sampleUrl) 
    .then(res=>res.json() ) //응답 받고 merge
    .then(data => console.log('data> ', data)); //이건 왜 then이라고
}

// fetch(sampleUrl) 
// .then(res=>res.json() ) //응답 받고 merge
// .then(data => console.log('data> ', data)); 


const promiFetch = (url) => new Promise((resolve, reject) => {
    fetch(url)
    //res.json()가 프로미스를 반환
    .then(res => res.json())
    .then(resolve);
    //.then(data => resolve(data))
});
const asyncFetch = async (url) => {
    const res = await fetch(url);
    const data = await res.json();  //any return : 프로미스 끝나고 data에 받아
    return data;
    //return res.json() : 프로미스를 return
    //return await res.json() : 근데 여기서도 프로미스를 return
    //받는 쪽에서 근데 await 하니까 'return res.json()' 쓰면 돼.
};

const fn = promiFetch; //const fn = asyncFetch;

const data = await fn(sampleUrl);
console.log("🚀 ~ data:", data);

const data2 = await asyncFetch(sampleUrl);
console.log("🚀 ~ data2:", data2)
//그니까 어싱크가 new Promise 하는 거고.
//그걸 벗기려면 await 필요한데 그래서 받을 때 써야하는 거야.


const rets = [sampleUrl, sampleUrl2].map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
})
// 근데 프로미스, 프로미스 가 반환돼

const f = async () => {
    const res = await fetch(sampleUrl);

    if(!res.ok) throw new Error('Fail');

    await new Promise((resolve) => setTimeout(resolve, 2000));
    //리졸브 됐다는 건 then이고, then을 await으로 표현한 거다.

    const data = await res.json();
    return data.name;
}

console.log(await f());