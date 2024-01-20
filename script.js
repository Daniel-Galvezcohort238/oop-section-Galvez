function Player(name) {
    this.name = name,
    this.level = 1,
    this.xp = 0
}

Player.prototype.gainXp = function(newXp) {
    this.xp += newXp;
    if(this.xp > 10) {
        this.level++;
        this.xp -= 10;
    }
}

Player.prototype.describe = function() {
    return (`${this.name} is level ${this.level}, and has ${this.xp} experience 
    points.`);
}

let player1 = new Player('Sally');
let player2 = new Player('James');

player1.gainXp(5);
console.log(player1.describe());
player2.gainXp(7);
console.log(player2.describe());

player1.gainXp(3);
console.log(player1.describe());
player2.gainXp(2);
console.log(player2.describe());

player1.gainXp(8);
console.log(player1.describe());
player2.gainXp(4);
console.log(player2.describe());
