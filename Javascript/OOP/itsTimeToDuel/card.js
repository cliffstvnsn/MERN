class Card {
    constructor(name, cost) { 
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack (target) {
        target.resilience -= this.power
        return this;
    }

    showStats() {
        console.log(`My name is ${this.name}:\nHere are my Stats:\nPower:${this.power}\nResilience: ${this.resilience}`)
    }
}




class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    increaseRes(target) {
        target.resilience += this.magnitude
        return this
    }

    reduceRes(target) {
        target.resilience -= this.magnitude
        return this
    }

    increasePow(target) {
        target.power += this.magnitude
        return this
    }
}
const redBeltNin = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNin = new Unit("Black Belt Ninja", 4, 5, 4)
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
const unhand = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", 2)
const pairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

redBeltNin.showStats();
console.log("-----------------");
hardAlgorithm.increaseRes(redBeltNin);
redBeltNin.showStats();

blackBeltNin.showStats();
console.log("-----------------");
unhand.reduceRes(blackBeltNin);
blackBeltNin.showStats();
console.log("-----------------");
pairProg.increasePow(redBeltNin);
console.log("-----------------");
redBeltNin.showStats();
redBeltNin.attack(blackBeltNin);
console.log("-----------------");
blackBeltNin.showStats();


