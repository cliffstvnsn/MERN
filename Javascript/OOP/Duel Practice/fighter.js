class Fighter {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    punch() {
        this.speed -= 1;
        this.strength -= 2;
        return this;
    }

    duck() {
        this.health += 10;
        this.speed -= 1;
        this.strength -= 2;
        console.log("I'm ducking!!!")
        return this;
    }

    showStats() {
        console.log(`My name is ${this.name}:\nHere are my Stats:\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`)
    }
}

const kimbo = new Fighter("Kimbo Slice", 100, 10, 50)
kimbo.showStats()
console.log("-----------------")
kimbo.punch().punch().duck();
kimbo.showStats();
// console.log("-----------------")
// kimbo.duck();
// kimbo.showStats();

module.exports = Fighter;