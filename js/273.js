//3개의 promise


setTimeout( function() {
    console.log('depth1', new Date());
    setTimeout( function() {
      console.log('depth2', new Date());
      setTimeout( function() {
        console.log('depth3', new Date());
        //throw new Error('Already 3-depth!!');
      }, 3000 );
    }, 2000);
  }, 1000);

console.log('START!', new Date());

console.log("===============================")

// const depthTimer = d => {
//     return new Promise(resolve => setTimeout(resolve(
//         console.log('depth', d, newDate())
//     ), d*1000));
// }
const depthTimer = d => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('depth'+d, new Date());
    resolve(d + 1);
    if(d>=3) reject(new Error('Already 3-depth!!'));
  },d*1000)
  
})

//1) then
depthTimer(1)
.then(depthTimer)  //(2)=>depthTimer(2)라서 depthTimer가 실행 가능하다.
.then(depthTimer)
.catch(err=>{console.error(err)});
console.log('START!', new Date());

//2) await
try {
  const r1 = await depthTimer(1);
  const r2 = await depthTimer(2);
  const r3 = await depthTimer(3);
} catch(err){
  console.error(err)
}

//3) for-await-of
console.log('Start', new Date());//await일 땐 먼저 해야해
const depthTimers = [1,2,3].map(async depth => depthTimer(depth))
try{
  for await(const dt of depthTimer()){
    dt;  //할 게 없음
  }
} catch(err){
  console.error(err)
}

