//01/27
//PAGE 61~
var gg=1; 
let bb=2;

function f1(x,y){
    console.log("test1",gg);
    var gg=11; 
    let bb=22;
    console.log('f1> ',gg,bb,zz,f2,f2.length);  //그니까 여기서 호출되는 f2가 inner2(2)인데, (2)의 arguments가 3개라서 length가 3.
    f2('first');  //블럭 들어가기 전이니까, 여기서는 inner2(2)가 호출.
    {  //블럭은 call-stack에 못 들어가. f1의 lexical environment에 들어가는 거야.
        const xx=99;
        f2('nest-first'); //바로 아래 f2가 실행.
        var zz=88;
        function f2(t) {
            console.log(t,'nested',xx,zz);
            //console.log(t,'nested',xx,zz,lll): error!!: cannot access 'lll' before initialized
            //line 11 주석처리하면, line 15 & line 25는 정상 실행.
        }  
        //(1)f1 scope 올라가서 undefined였는데, function f2(t,u)가 hoisting되면서 <funcion object>로 정의된다.
        //근데 f1의 lexical에서 정의되는 거지, block의 lexical에서 정의되는 건 아냐.
        let lll=0;
    }
    function f2(t,u){console.log(t,'inner',xx,zz);}  //(2)이게 제일 처음 호이스팅 될 때 <funcion object>로 걸렸다가
    function f2(t,u,v){console.log(t,'inner2',xx,zz);}  //(3)그 다음에 이걸로 덮어쓰고, 마지막으로 블럭 안의 f2가 걸린다.
    var zz=800;
    f2('second')  //그래서 이것도 블럭 안에 있는 f2(1)가 호출되는 거야.
    //근데 f2는 block을 closure!!, xx=99이다. 여기선 lll도 찍혀.
}
function f2(g){  //이건 globalThis라는 다른 공간에 따로 선언된 f2(4)야.
    console.log(g,'global f2> ',gg,bb,xx,kk);
}
let xx=9;
if(gg>0){var kk=33; const yy=9;}
f1(1,2);
console.log(kk); //console.log(kk, yy): error!!: yy is not defined.
f2('third');  //이건 global 영역에서 호출이니까, global f2(4)가 호출.
console.log("test2",gg);
//f1안에 f2는, f1이 호출될 때 생겼다가, pop될 때 사라지고, 반복.