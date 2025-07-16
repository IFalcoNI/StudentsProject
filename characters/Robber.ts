import { Character } from './Character';
class Robber extends Character {
  constructor(health: number, power: number) {
    super(health, power);
  }
  attack() {
    console.log('Code for atack here');
    console.log('Atacking with bow');
  }
  defense() {
    console.log('Code for defending here');
    console.log('Running away');
  }
}

export { Robber };
