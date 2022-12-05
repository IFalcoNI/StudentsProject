import { Character } from './Character';
class Robber extends Character {
  constructor(health: number, power: number) {
    super(health, power);
  }
  attack() {
    console.log('Code for atack here');
    console.log('Atacking with bow');
  }
  defend() {
    console.log('Code for defending here');
    console.log('Running away');
  }
}

const robber = new Robber(100, 25);
console.log(robber);

export { Robber };
