//함수를 한번만 실행하는 once 함수 + 바인딩 실습

function once(f){
    //@Todo call once
    let didRun = false;

    //return...
    return function(...args){  
        if (didRun) return;
        return (didRun=true, f.apply(this, args));
        // return didRUn? undefined : (didRun=true, f.apply(this, args));
        //바인딩 받으려면 화살표말고 이렇게 써야해.
        //가벼운 함수 쓸 때 화살표 함수를 쓴다.

        //return f(...args);
        //return f.call(this, ...args);
        //return f.apply(this, args);
        //return f.bind(this)(...args);
    } 
}

function f(x,y){
    return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! ${this.id}`;
}
const fn = once(f);

const thisObj1 = {id:1};
const thisObj2 = {id:2};
const thisObj3 = {id:3};
console.log(fn.call(thisObj1, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.apply(thisObj2, [2, 7])); // undefined
console.log(fn.bind(thisObj3)(3, 8)); // undefined


// const once = (f) => {}
// const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! ${this.id}`, thisObj);
