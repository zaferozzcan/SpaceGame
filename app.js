
var aliensLeft = 6

class Hero {
    constructor(name) {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7
    };
    heroAttack = (alien) => {
        var randomNumber = Math.random()
        if (randomNumber >= this.accuracy) {
            console.log("Hero Attack has missed");
        } else {
            console.log("Hero hit the target");
            alien.hull -= this.firepower
            check0()
        }
    }
}

class Alien {
    hull = Math.floor(Math.random() * 4) + 3;
    firepower = Math.floor(Math.random() * 3) + 2;
    accuracy = (Math.floor(Math.random() * 3) + 6).toFixed(1) / 10;

    alienAttack = (hero) => {
        var randomNumber = Math.random();
        if (randomNumber >= this.accuracy) {
            console.log("Alien Attack has missed");
        } else {
            console.log("Alien hit the Hero");
            hero.hull -= this.firepower
            check0()
        }
    }
}


class AlienFactory {
    constructor(alienName) {
        this.alienName = alienName;
        this.aliens = [];
    }
    generateAlien() {
        const newAlien = new Alien(this.alienName, this.aliens.length);
        this.aliens.push(newAlien);

    }
    findAlien(index) {
        return this.aliens[index];
    }
}





const hero = new Hero("USS")


// cretae all the alien ships
const alien = new AlienFactory("Alien")
for (let index = 0; index < 6; index++) {
    alien.generateAlien()
}



var alien1 = alien.aliens[0]


console.log(alien1);

function check0() {
    if (hero.hull <= 0) {
        console.log("The game is over!, Hero Hull zero")
        return
    } else if (alien1.hull <= 0) {
        console.log("Alien1 has lost the game.");
        console.log("Do you wanna keep fighting?");
    } else {
        console.log("Game is not over yet! Keep Fighting!");
    }
}

for (let i = 0; i < 3; i++) {
    hero.heroAttack(alien1);
    console.log("hero hull", hero.hull);
    console.log("alien hull", alien1.hull);
    alien1.alienAttack(hero);
    check0()

}










// ///////Battle starts here\\\\\\\

// // cretae a hero
// const hero = new Hero("USS")

// // cretae all the alien ships
// const alien = new AlienFactory("Alien")
// for (let index = 0; index < 6; index++) {
//     alien.generateAlien()
// }

// // console.log(alien.aliens); there are six aliens in the array of aliens to get one use this method ==> alien.findAlien(index)
// var alienIndex = 0
// var currentAlien = alien.findAlien(alienIndex)

// const gameFuntions = {
//     battle: (hero, alien) => {

//         while (hero.hull != 0 || currentAlien) {
//             hero.heroAttack(currentAlien)
//             alien.alienAttack(hero)
//         }
//     },
//     checkBattleWinner: () => {
//         if (hero.hull == 0) {
//             console.log("Hero lost the battle, game is over!");
//             return
//         } else if (alien.hull == 0) {
//             console.log("Alien lost this battle");
//             var askInput = prompt("Do you wanna retrieve or continue? r/c")
//             if (askInput == "c") {
//                 alienIndex++
//                 gameFuntions.battle(hero, alien)
//             } else if (askInput == "r") {
//                 console.log("You have lost the game.");
//             } else {
//                 console.log("put invalid answer--- put r or c");
//             }
//         }
//     }
// }


// console.log(currentAlien)


// while (hero.hull != 0 || alien.findAlien(aliensLeft)) {
//     hero.heroAttack(currentAlien)
//     alien.alienAttack(hero)
//     gameFuntions.checkBattleWinner();


// }
