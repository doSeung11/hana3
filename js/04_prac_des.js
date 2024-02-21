//01/26

//PAGE 50
//1번
//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
for(let i = 1; i < 11; i = i + 1) console.log(i/10);  
for(let i = 0.1; i < 1; i = i + 0.1) console.log(+i.toFixed(1));  
// 0.1
// 0.2
// 0.3
// 0.4
// 0.5
// 0.6
// 0.7
// 0.8
// 0.9
// 1


//----------------------------------------------------------------------
//PAGE 51
//2번
//다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
//(단, 소숫점 자리수는 긴쪽에 맞춘다)

function getCharLen(x){
    return x.toString().length;
}

function addPoints(a, b) {
    len = Math.max(a.toString().length, b.toString().length) //-> 이것도 함수 중복 있으니까 뺄 수 있어.
    // a_len = a.toString();
    // b_len = b.toString();
    // len = (a_len > b_len? a_len : b_len) 
    // 변수 잡으면 메모리 잡아먹혀

    console.log("🚀 ~ len:", +(a+b).toFixed(len-2))
    return +(a+b).toFixed(len-2)
}

addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)     // 0.42
addPoints(0.34, 0.226)    // 0.566


//----------------------------------------------------------------------
//PAGE 52
//3번
//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
const {passwd, ...userInfo} = user  //...는 rest 연산자! 나머지가 들어가!
console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

//----------------------------------------------------------------------
//PAGE 53
//4번
//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 

const arr = [[{id: 1}], [{id:2}, {id: 3}]]

const [[{id:id1}],[{id:id2},{id:id3}]] = arr
console.log(id1,id2,id3);   // 출력결과: 1 2 3