function discount(){
    const dcRate = 0.1;
    return function(price){
        return price*dcRate;
    }
}

const items = [
    {item:'item1',price:1},{item:'item2',price:2},
];

const dc = discount(); //함수가 리턴
for (const {item, price:orgPrice} of items){
    const salePrice = orgPrice - dc(orgPrice);
    console.log("🚀 ~ salePrice:", salePrice);
}


const cities = ['seoul','busan','daejeon'];
console.log(cities[Symbol.iterator]().next());
const iter = cities.values(); 
//iter  =  cities[Symbol.iterator]()  =  cities.values()
console.log(iter.next());
console.log(iter.next());
console.log(iter);


function* gener() {
    const x = yield 1;
    const y = yield 10;
    console.log('x y =', x, y);
    return x + y;
  }
  const it3 = gener();

  console.log(it3.next());
  console.log(it3.next()); // { value: 1, done: false }
  console.log(it3.next(3)); // { value: 13, done: false }
  console.log(it3.next(5)); 

  function* route() {
    const start = yield "출발 역은?";  // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!
    const end = yield "도착 역은?";
    return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
  }
  
  console.log("=============")
  const caller = route();   // next() 함수가 있는것으로 볼 때, "내 안에 이터레이터 있다!"
// console.log( caller.next());      // undefined보내면 제너레이터는 {value: '출발 역은?', done: false}를 caller에게 보내(반환하)고 일시 정지.
  console.log(caller.next('문래')); // start에 '문래'를 주입하고, {value: '도착 역은?', done: false}를 caller에게 보내고 일시 정지.
  console.log(caller.next('신림')); // end에 신림 주입하고, {value: '문래역에서 출발하여 신림역에 도착합니다.', done: true} 반환과 동시에 멈춤!
  console.log(caller.next());