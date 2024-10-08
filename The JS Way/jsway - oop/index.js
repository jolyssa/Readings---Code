

/* 

Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".
*/

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size =  size;
    }
    bark(){
        if (this.size > 60) {
            return 'Grrr! Grrr!'
        } else {
            return 'Woof! Woof!'
        }
    }

    describe(){
        
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size} cm.`)
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
console.log(fang.describe())
const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

console.log(fang.describe())


/*
Character inventory
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.

Here's the expected execution result.
*/

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
}

const aurora = new Character('Aurora', 150, 25)
const glacius = new Character('Glacius, 130, 30')

console.log(aurora.health)

aurora.health -= 20

aurora.strength += 10

console.log(aurora.describe())
console.log(glacius.describe())