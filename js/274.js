
// myFetch를 이용하는 코드
myFetch(sampleUrl).then(user => {
  console.log('user>>>', user);
});


글 목록 읽고
반복문 돌면서 각 댓글을 출력한다.

글 목록을 fetch 해서
댓글을 어떻게 읽을지가 핵심이다.

const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
const c_url = 'https://jsonplaceholder.typicode.com/posts/<postId>/comments';
const myFetch = url => {
    fetch(url).then(res => res.json());
}

// 배열 = await.Fetch('글목록')
// 배열. ~~~~~~