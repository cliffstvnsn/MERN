const Fighter = require('./Fighter')

class Judomaster extends Figher {
    constructor(name, scaredLevel){
        super(name, 70, 50, 30);
        this.scaredLevel = scaredLevel;
    }

    flip(){
        super.duck();
        this.health += 30;
        console.log(`Here is my Scared Level: ${this.scaredLevel}, my health is: ${this.health}`)
    }

    attack(target) {
        target.health -= this.strength;
        console.log(`${this.name} attacked ${target.name}, dealing ${this.strength}`)
    }
}