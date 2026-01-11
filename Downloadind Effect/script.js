let button = document.querySelector('button')
let downloader = document.querySelector('.downloader')
let h2 = document.querySelector('h2')

button.addEventListener('click', ()=>{
    let grow = 0;
    let num = Math.floor(Math.random()*100)
    button.style.pointerEvents = 'none'
    
    let interval = setInterval(() => {
        grow++
        button.innerHTML = 'Downloading...'
        h2.innerHTML = grow + '%'
        h2.style.fontSize = '4rem'
        downloader.style.width = grow + '%'
    }, num);

    setTimeout(() => {
        clearInterval(interval)
        button.innerHTML = 'Downloaded'
        button.style.opacity = '0.5'
        console.log(num);
        console.log('Downloaded in ' + num/10 + ' seconeds');
    }, num*100);
})