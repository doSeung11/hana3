//01/27
//PAGE 74~

//'use strict';

f = 1;
NaN = 1;//원래 할당 안 돼
Infinity = 0;//원래 할당 안 돼
function f(a, a) { console.log('outer f', a); }
//뒤의 파라미터 a가 출력/ 원래 이렇게 파라미터명 중복 선언 안 돼
delete f; // error
{
  f(100);
  function f(a) { console.log('block f'); }//strict 모드에서는 const f=...와 같기 때문에,
}
f(200);//여기서 호출할 때 에러나는 거야.

console.log("============================")

var gg = 1;
let bb = 2;


function f1(x, y) {
  var gg = 11;
  let bb = 22;
  console.log('f1>', gg, bb, zz, f2, f2.length);
  f2('* first');
  {
    const xx = 99;
    f2('* nest-first');
    var zz = 88;
    function f2(t) {  //strict 모드에서는 이것도 블럭에 갇혀서,
      console.log(t, '`nested`', xx, zz);
    }
  }
  function f2(t, u) {
    console.log(t, '`inner`', xx, zz);
  }
  function f2(t, u, v) {  //이게 마지막으로 인정받아.
    console.log(t, '`inner2`', xx, zz);
  }
  var zz = 800;
  console.log('🚀  gg:', gg);
  f2('* second');
}

function f2(g) {
    console.log(g, 'global f2>', gg, bb, xx, kk);
  }
  let xx = 9;
  if (gg > 0) {
    var kk = 33;
    const yy = 9;
  }
  f1(1, 2); 
  console.log('kkkkk>>', kk);
  f2('* third');



  // 결론
  // 블록 속에서는 const, let을 쓰도록 하자!!!
  // 정의하고 함수 부를 거면 const, 아니면 function