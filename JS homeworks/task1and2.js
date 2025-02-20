//HOMEWORK FROM CLASS 12
//TASK 1
function Person(id, fName, lName, age){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.fName} ${this.lName}`);
    }
}

let person = new Person(123, "Bob", "Bobsky", 25)
console.log(person);
person.getFullName()


function Animal(name, age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log(`${this.name} is eating!`);
    }
    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    }
}

let animal = new Animal("Fluffy", 3)
console.log(animal);
animal.eat()

function Cat(name, age, color, ownerId){
    Animal.call(this, name, age) //za ova .call vidov na net deka mozham so nego da inheritnam raboti
    this.color = color;
    this.ownerId = ownerId;
    this.eat = function(){
    console.log(`${this.name} is eating!`);
    }
    this.sleep = function(){
        console.log(`${this.name} is sleeping!`);
    }
    this.meow = function(){
        console.log(`${this.name} says meow! :3`);
    }
}

let kitty = new Cat("Luna", 2, "gray")
kitty.meow()

let arrayOfPeople = [
    person1 = (222, "Jesse", "J.", 23),
    person2 = (231, "Sarah", "S.", 33),
    person3 = (455, "Suzie", "S.", 34),
    person4 = (342, "Jake", "J.", 26),
    person5 = (345, "Jonah", "J.", 25)
]

let kitty1 = new Cat("Lora", 2, "white", [4])
let kitty2 = new Cat("Rosie", 3, "gray", [2])
console.log(kitty1);
console.log(kitty2);

//vo konzolata, ownerId go dava kako reden broj, ne znam dali taka treba da go dade ili celi podatoci za ownerot, i dali treba arrayot da go napravam posle Person ili ne menuva nishto toa?

//TASK 2

Cat.prototype.ownerDetail = function(arrayOfPeople){
    if (this.ownerId == null) {
        console.log(`${this.name} doesn't have an owner!`);
    }else{
        console.log("Cat has an owner, I don't know how find him :/");//help pls
    }
}

PersianCat.prototype = Object.create(Cat.prototype);
function PersianCat(name, age, color, ownerId, eyeColor){
    Cat.call(this, name, age, color, ownerId);
    this.eyeColor = eyeColor;
    this.furDescription = function(){
      console.log(`${this.name} has full fur!`);
    }
}

RagDollCat.prototype = Object.create(Cat.prototype);
function RagDollCat(name, age, color, ownerId, weight){
    Cat.call(this, name, age, color, ownerId)
    this.weight = weight;
    this.isFriendly = false
    this.personality = function(isFriendly){
        if(isFriendly){
            this.isFriendly = true
            console.log(`${this.name} is friendly!`);
        }else{
            this.isFriendly = false;
            console.log(`${this.name} is not friendly.`);
        }
    }
}

let persianCat = new PersianCat("Lara", 2, "black", [5], "green");
let ragDollCat = new RagDollCat("Max", 3, "brown", [3], 7);
let randomCat = new PersianCat("Eve", 2, "black")
console.log(persianCat);
console.log(ragDollCat);
console.log(randomCat.ownerDetail(arrayOfPeople));
console.log(persianCat.ownerDetail(arrayOfPeople));
persianCat.furDescription()
ragDollCat.personality()