let arr = [
    {
        team: 'KKR',
        primaryColor: 'purple',
        secondaryColor: 'gold'
    },
    {
        team: 'MI',
        primaryColor: 'blue',
        secondaryColor: 'gold'
    },
    {
        team: 'RCB',
        primaryColor: 'red',
        secondaryColor: 'black'
    },
    {
        team: 'CSK',
        primaryColor: 'yellow',
        secondaryColor: 'blue'
    },
    {
        team: 'DC',
        primaryColor: 'blue',
        secondaryColor: 'red'
    },
    {
        team: 'SRH',
        primaryColor: 'orange',
        secondaryColor: 'black'
    },
    {
        team: 'RR',
        primaryColor: 'pink',
        secondaryColor: 'blue'
    },
    {
        team: 'PBKS',
        primaryColor: 'red',
        secondaryColor: 'gold'
    },
    {
        team: 'LSG',
        primaryColor: 'skyblue',
        secondaryColor: 'royalblue'
    },
    {
        team: 'GT',
        primaryColor: 'blue',
        secondaryColor: 'yellow'
    },
]
let button = document.querySelector('button')
let colorbox = document.querySelector('.top')
let heading = document.querySelector('h1')

button.addEventListener('click',function(){
    let random = Math.floor(Math.random()*arr.length)
    heading.innerHTML = arr[random].team
    colorbox.style.background = `linear-gradient(${arr[random].primaryColor},${arr[random].secondaryColor})`
})