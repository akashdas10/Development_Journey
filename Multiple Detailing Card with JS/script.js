let pirates = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        description: "Monkey D. Luffy is the captain of the Straw Hat Pirates. He has the ability to stretch his body like rubber after eating a Devil Fruit.",
        img: "https://i.pinimg.com/1200x/27/73/65/27736516e159bc517acd15b68de496e8.jpg"
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        description: "Roronoa Zoro is a skilled swordsman and a member of the Straw Hat Pirates. He aims to become the world's greatest swordsman.",
        img: "https://i.pinimg.com/736x/9c/a2/9b/9ca29b75d512348a3ea2756b2b6621a5.jpg"
    },
    {
        name: "Nami",
        role: "Navigator",
        description: "Nami is the navigator of the Straw Hat Pirates. She is an expert in cartography and weather prediction.",
        img: "https://i.pinimg.com/1200x/f9/1c/03/f91c03421f8fe43684cda312344a102c.jpg"
    },
    {
        name: "Usopp",
        role: "Sniper",
        description: "Usopp is the sniper of the Straw Hat Pirates. He is known for his marksmanship and inventive gadgets.",
        img: "https://i.pinimg.com/1200x/81/39/11/8139115f001225ba6f5c971698f7f339.jpg"
    },
    {
        name: "Sanji",
        role: "Cook",
        description: "Sanji is the cook of the Straw Hat Pirates. He is a skilled martial artist who fights using his legs.",
        img: "https://i.pinimg.com/1200x/04/98/75/049875b394226037a9033b633d5af7b0.jpg"
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        description: "Tony Tony Chopper is the doctor of the Straw Hat Pirates. He is a reindeer who gained human-like abilities after eating a Devil Fruit.",
        img: "https://i.pinimg.com/736x/4e/e4/1a/4ee41a73dc63cb9dbe7a14209a19e8fc.jpg"
    },
    {
        name: "Nico Robin",
        role: "Archaeologist",
        description: "Nico Robin is the archaeologist of the Straw Hat Pirates. She has the ability to sprout extra limbs from her body after eating a Devil Fruit.",
        img: "https://i.pinimg.com/736x/68/5b/6a/685b6a0a7cb16e1dc125abf882844596.jpg"
    }
]

let main = document.querySelector('main')
let sum = ''

pirates.forEach((crew)=>{
    sum = sum + 
    `<div class="card">
        <img src="${crew.img}" alt="Straw Hats">
        <h2>${crew.name}</h2>
        <h3>${crew.role}</h3>
        <p>${crew.description}</p>
    </div>`
})

main.innerHTML = sum