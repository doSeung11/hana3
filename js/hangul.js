//이제 esm?
const ㄱ='ㄱ'.charCodeAt(0);
const ㅎ='ㅎ'.charCodeAt(0);
const 가='가'.charCodeAt(0);
const 나='나'.charCodeAt(0);
const 잌='잌'.charCodeAt(0);
console.log(나-가);
for(let i =가;i<나;i+=1){
    console.log(i, String.fromCharCode(i),(i-가)%28)


}

const isEndJaum = str => {
    const s = str.charCodeAt(str.length-1);
    if(s>=ㄱ && s<=ㅎ) return true;
    if((s-가)%28!=0) return true;
}

isEndJaum('강원도');   // false
isEndJaum('바라당');   // true
isEndJaum('ㅜㅜ');    // false
isEndJaum('케잌');    // true
isEndJaum('점수 A');  // false   cf. isEndJaum('알파벳L')은 true
isEndJaum('24');     // false   cf. isEndJaum('23')은 true 136780


asserts.strictEqual(isEndJaum('강원도'),false);