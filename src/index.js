import "../src/css/style.css" 

const Animal = class {
    constructor (image, name, numberOfLegs){
        this.image = image;
        this.name = name;
        this.numberOfLegs = numberOfLegs;
    }
}

let cards = document.querySelector(".cards");


// create dog instances and display on the screen


const Dog = class extends Animal {
    constructor(image, name, numberOflegs, age){
        super(image, name, numberOflegs);
        this.age = age;
    }
}

let dogs = [
    new Dog ("./images/taci.jpeg","Scooby-Doo", 4, 52),
    new Dog ("images/droopy.jpeg","Droopy", 4, 65),
    new Dog ("images/taci.jpeg","Taci", 4, 75),
    new Dog ("images/findik.jpeg", "Fındık", 4, 1) 
]

for (let i=0; i<dogs.length; i++) {
    cards.innerHTML += `<div class="box">
    <h2>${dogs[i].name}</h2>
    <img src=${dogs[i].image}>
    Age: ${dogs[i].age} <br>
    Number of legs: ${dogs[i].numberOfLegs} 
    </div>`;
}


// create duck instances and display on the screen


const Duck = class extends Animal {
    constructor(image, name, numberOflegs, age){
        super(image, name, numberOflegs)
        this.age = age;
    }
}

let ducks = [
    new Duck ("images/daffyduck.jpeg", "Daffy Duck", 2, 53),
    new Duck ("images/bill.jpg", "Bill", 2, 1),
    new Duck ("images/billie.jpeg", "Billie", 2, 2),
    new Duck ("images/leopy.jpeg", "Leopy", 2, 4)
]

for (let i=0; i<ducks.length; i++) {
    cards.innerHTML += `<div class="box">
    <h2>${ducks[i].name}</h2>
    <img src=${ducks[i].image}>
    Age: ${ducks[i].age} <br>
    Number of legs: ${ducks[i].numberOfLegs} 
    </div>`
}