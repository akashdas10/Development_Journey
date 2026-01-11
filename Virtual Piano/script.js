const keyMap = {
  z: "C1",
  s: "C1",
  x: "Db2",
  d: "Db2",
  c: "Eb3",
  v: "Gb1",
  g: "Gb1",

  b: "Ab2",
  h: "Ab2",
  n: "Bb3",
  j: "Bb3",
  m: "Bb3",

  q: "F4",
  "2": "F4",
  w: "C5",
  "3": "C5",
  e: "G5",
  r: "D6",
  "5": "D6",
  t: "A6"
};

let main = document.querySelector('main')

document.addEventListener('keydown',(dets)=>{
  const value = keyMap[dets.key.toLowerCase()]
  console.log(value);
  if(!value) return
    
  const audio = new Audio(`./Audio/${value}.mp3`)
  audio.currentTime = 0;
  audio.play()
})