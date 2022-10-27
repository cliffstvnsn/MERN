class Ninja {
    //constructor
    constructor(nameParam, healthParam){
        this.name = nameParam;
        this.health = healthParam;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){ 
        console.log("My name is " + this.name)
            return this
    }

    showStats(){
        console.log(`name: ${this.name}\n health: ${this.health}\n speed: ${this.speed}\n strength: ${this.strength}`)
            return this
    }

    drinkSake(){
        console.log(this.name + ' drank sake')
        this.health += 10
        console.log('health is now ' + this.health)
            return 
    }
}

class Sensei extends Ninja {
    constructor (name){
        super(name, 200)
            this.health = 200
            this.speed = 10
            this.strength = 10
            this.wisdom = 10
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const ninja2 = new Sensei("Chuck Norris");
ninja2.speakWisdom();




