class Player {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and cause ${damage} damage points!`
      );
      target.health -= damage;
    }
  }
}

const player1 = new Player('goku', 100, 50);
const player2 = new Player('vegeta', 100, 50);
player1.attack(player2);
console.log(player2);
