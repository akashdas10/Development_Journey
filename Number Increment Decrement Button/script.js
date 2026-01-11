let h1 = document.querySelector("h1")
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')

let num = 0;
increase.addEventListener('click', function(){
    num++;
    h1.innerHTML = num;
})
decrease.addEventListener('click', function(){
    num--;
    h1.innerHTML = num;
})
reset.addEventListener('click', function(){
    num = 0;
    h1.innerHTML = num;
})