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


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();





// //create a class Athlete

// class Athlete {
//     //constructor
//     constructor(nameParam, speedParam){
//         this.name = nameParam;
//         this.energy = 100;
//         this.speed = speedParam;
//         this.strength = 50;
//     }
//     sayName() {
//         console.log("My name is " + this.name)
//     }

//     playGame(sportName, energyLevel) {
//         if(energyLevel < 0) {
//             console.log(`Not enough energy to play ${this.name}`)
//             return;
//         }
//         console.log(this.name + " is playing " + sportName)
//         this.energy -= energySpent; 
//     }
// }

// let a1 = new Athlete("Kobe" , 100);
// // console.log(a1.name)

// a1.name = "Kobe is the man!"
// // console.log(a1.name);

// console.log(a1)
// a1.playGame("Basketball, 25")
// console.log(a1)


// class Basketball extends Athlete {
//     constructor(nameParam, speedParam, position) {
//         super(nameParam, speedParam)
//         this.position = position
//     }
//     foul(energySpent){
//         console.log("You fouled me fool!")
//         this.energy -= energySpent
//     }
// }

// let b1 = new Basketball()