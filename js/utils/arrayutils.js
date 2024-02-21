//0202
//#174


Object.defineProperties(Array.prototype, {
    first: {
      get: function () {
        return this[0];
      },
    },
    last: {
      get: function () {
        return this[this.length - 1];
        // return this.slice(-1)[0];
      },
    },
});

Array.prototype.uniqBy = function(prop){
    return [...new Set(this.map(item => item[prop]))];
};

Array.prototype.filterBy = function(prop, value){
    return this.filter(item => item[prop]==value);
}

//sortby 만들어봐
Array.prototype.sortBy = function(prop, dir='asc'){
    const flag = direction.toLowerCase() == 'asc' ? 1 : -1
    if (dir=='asc'){
        return this.sort((a,b)=> a[prop]>b[prop] ? 1 : -1)
    }
    else{
        return this.sort((a,b)=> a[prop]>b[prop] ? -1 : 1)
    }
}
//findby 만들어봐
Array.prototype.findBy = function(prop, value){
    return this.find(item => item[prop]==value);
}
const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const users = [ hong, kim, lee, park, choi, loon, ko];
const uniqDepts = users.uniqBy('dept');
console.log("🚀 ~ uniqDepts:", uniqDepts)

const hrUsers = users.filterBy('dept', 'HR');
console.log("🚀 ~ hrUsers:", hrUsers)

const userf = users.findBy('name', 'Lee');
console.log("🚀 ~ userf:", userf)

console.log('SortByName> ', users.sortBy('name'));
console.log('SortByName> ', users.sortBy('id','desc'));
console.log('SortByName> ', users.sortBy('dept','desc'));