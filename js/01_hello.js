const userName = 'Hong';
var age = 33;
console.log("hello,", userName, '!');
console.log("🚀 ~ userName:", userName) //변수에 커서 두고, ctrl+alt+L
console.log(`Hello, ${userName}!`); //esc key 아래


// npm i nodemon -g
// nodemon -v
// auto save
// nodemon hello.js

//코드 alt + 방향키로 위아래 옮기기 가능

//memory에서 stack에 값 참조하는데 값이 있으면 call by value, &있으면 call by reference
//&있으면 그 해당 주소값 heap 영역에 값이 들어있는 거야.

//메모리가 찢어진 걸 관리하려면 페이징이 필요.
//근데 페이징 관리 어려우니까
//새롭게 추가되면 걍 새로운 메모리 자리를 잡아
//gc가 원래 있던 거 삭제하는 거.
//근데 js는 숫자도 그냥 메모리 새로 잡는대.

const n = 123; //type num
const bi = 123n; //type bigint
console.log(n, bi);
console.log(n == bi); //True
console.log(n===bi); //False
f = 123.5 //n+f=246.5