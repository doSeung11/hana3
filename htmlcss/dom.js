console.log('dom');

const div = document.createElement('div');
div.innerText = 'innerText';
div.style.backgroundColor = 'red';
div.style.color = 'white';

const span = document.createElement('span');
div.append(span);
span.innerHTML = '<br>Span: <strong>strong</strong>'

document.body.append(div);

const btn = document.createElement('button');
btn.textContent = 'BTN';
document.body.append(btn);

function toUpper(ele){
    ele.innerText = ele.innerText.toUpperCase();
}

btn.addEventListener('click', evt => {
    alert('btn clicked!')
    const bbb = document.getElementById('li2');
    //bbb.innerText=bbb.innerText.toUpperCase;
    toUpper(bbb);
    const ul = document.querySelector('.bg-yellow');
    const aaa = ul.firstElementChild;
    toUpper(aaa);
    const ccc = ul.lastElementChild;
    toUpper(ccc);

    console.log('cl>>', div.classList);
    if(div.classList.contains('show')){
        div.classList.remove('show');
        div.classList.add('hide');
    } else{
        div.classList.add('show');
        div.classList.remove('hide');
    }
    
})

console.log(btn.textContent);
console.log(div.innerText);
console.log(div.innerHTML);