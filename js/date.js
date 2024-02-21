const d = new Date()

console.log("일 월 화 수 목 금 토 ");

d.setDate(1);
line = '1 ';
pad = ' '.repeat(d.getDay());
line = pad+line;
//line.padStart(d.getDay(), ' ');
for (let i=2; i<30;i+=1){
    d.setDate(i)
    line += d.getDate() + ' ';
    if(d.getDay()==6){
        console.log(line)
        line = '';
    }
}
console.log(line);
