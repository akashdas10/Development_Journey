addEventListener('mousemove',(event)=>{
  console.log(event.clientX, event.clientY);
  document.body.style.setProperty("--x", event.clientX + "px")
  document.body.style.setProperty("--y", event.clientY + "px")
})