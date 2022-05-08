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
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        console.log(`${this.name} eliminated ${target.name}!`);
      }
    } else {
      console.log(`${this.name} can't attack (eliminated)`);
    }
  }
}
const goku = new Player('goku', 100, 50);
const vegeta = new Player('vegeta', 100, 50);

const playerOneBtn = document.getElementById('player-one-btn');
const playerTwoBtn = document.getElementById('player-two-btn');

function text(word) {
  console.log(`${word}`);
}

playerOneBtn.addEventListener('click', function () {
  goku.attack(vegeta);
});
playerTwoBtn.addEventListener('click', function () {
  vegeta.attack(goku);
});
const naruto = new Player('Naruto', 150, 70);
