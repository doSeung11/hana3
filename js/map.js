const hong = { id: 1, name: 'Hong' };
const map = new Map([  [1, 11], [2, 22]  ]);
map.set('three', 333);  // {three: 333, four: [1,2]}
map.set('four', [1, 2, 3, 4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map);  // Map(6) {  1 => 11, 2 => 22, 'three' => 333, 'four' => [ 1, 2, 3, 4 ],        ?, ?}
console.log(map.get(hong));  // 'Hong'
map.delete(hong);
map.has(hong);   // ?
map.has(hong.name); // ?
map.clear();

map.set(1, 11).set(2, 22).set(3, 33);    // ⇐⇒ new Map([[1, 11], [2, 22], [3, 33]); 
map.entries(); map.keys(); map.values(); // { [ 1, 11 ], [ 2, 22 ], … };  { 1, 2, … };  { 11, 22, … }
const map2 = new Map([...map])           // Map(2) { 1 => 11, 2 => 22, 3 => 33 }
const map3 = new Map([...map, ...map2]) 


console.log("=======================")

const hrTeam = {id:1,dname:'인사팀'};
const devTeam = {id:2,dname:'개발팀'};
const depts = {hrTeam, devTeam};

const Hong = {id:1,name:'Hong',dept:1};
const Kim = {id:2,name:'Kim',dept:2};
const emps = [Hong,Kim,{id:3,name:'Park',dept:2},{id:4,name:'Choi',dept:2}];

const deptMap = new Map();
deptMap.set(hrTeam.id, hrTeam);
deptMap.set(devTeam.id, devTeam);

const empMap = new Map();

for(let v of emps){
    let {id, name, dept} = v;
    empMap.set({id, name}, deptMap.get(dept));
}

console.log(deptMap);
console.log(emps);
console.log(empMap);
