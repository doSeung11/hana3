//02/07
//P274

const userId = 1;
const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
)

const posts = (await res.json()).map(({id:postId, title}) => ({postId, title}));
console.log("🚀 ~ posts:", posts);

//comment read function
//어싱크든 프로미든 성능은 같아.
async function getCommentsAsync(postId){  //이 방식을 더 선호
    const cRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return cRes.json();
}
async function getCommentsPromise(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(cRes => cRes.json());
}


//직렬 방식 -> 시간 1초 이상 걸림
console.time('comments-series')
for(const post of posts){
    post.comments = await getCommentsAsync(post.postId); //post에 comments 추가.
}
console.log("🚀 ~ posts:", JSON.stringify(posts, null, ' '));
console.timeEnd('comments-series');


//병렬 방식 -> 0.5초 정도
//여기서 getCommentsPromise이나 getCommentsAsync이나 성능 같아.
console.time('comments-parallel')
const commentRes = await Promise.allSettled(
    posts.map(post => getCommentsPromise(post.postId))
)
posts.forEach((post, idx) => {
    post.comments = commentRes[idx];
})
console.log("🚀 ~ posts:", JSON.stringify(posts, null, ' '));
console.timeEnd('comments-parallel');