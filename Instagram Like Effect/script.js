let img = document.querySelector('img');
let love = document.querySelector('.card i');

img.addEventListener('dblclick', ()=>{
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    love.style.opacity = '1';

    let interval1 = setInterval(() => {
        console.log('double clicked');
        love.style.transform = 'translate(-50%, -400%) scale(1) rotate(30deg)';
    }, 800);

    let interval2 = setInterval(() => {
        console.log('opacity 0');
        love.style.opacity = 0;
    }, 1000);

    let interval3 = setInterval(() => {
        console.log('down again');
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)'
    },1200);
    
    setTimeout(() => {
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        console.log('all intervals cleared');
    }, 1200);
})