let para = document.querySelector('p')
let text = para.innerText;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let i = 0;

function randomText(){
    let str = text.split('').map((char, index)=>{
        if(index < i){
            return char
        }
        else{
            return characters.split('')[Math.floor(Math.random()*characters.length)]
        }
    }).join('')

    para.innerText = str
    i = i + 0.25;
}

para.addEventListener('mouseenter',(e)=>{
    setInterval(()=>{
        randomText()
    },20) 
})