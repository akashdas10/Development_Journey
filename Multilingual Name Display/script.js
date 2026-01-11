let arr = [
    'I am Akash',
    'Soy Akash',
    'Main hoon Akash',
    'Ami Akash',
    'Je suis Akash',
    'Ich bin Akash',
    'Sono Akash',
    'Eu sou Akash',
    'Orewa Akash'
]
let main = document.querySelector('main')
let button = document.querySelector('button')

button.addEventListener('click', ()=>{
    let name = Math.floor(Math.random()*arr.length)
    let x = Math.floor(Math.random()*80)
    let y = Math.floor(Math.random()*80)
    let angle = Math.floor(Math.random()*361)
    let scale = Math.random()*3

    let h1 = document.createElement('h1')
    h1.innerHTML = arr[name]
    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = angle + 'deg'
    h1.style.scale = scale

    main.appendChild(h1)
})