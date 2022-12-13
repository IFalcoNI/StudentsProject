import { Character } from './Character';
class Magician extends Character {
  constructor(health: number, power: number) {
    super(health, power);
  }

  attack() {
    console.log('Code for atack here');
    console.log('Atacking with fireball');
  }
  defense() {
    console.log('Code for defending here');
    console.log('Magic staff');
  }
}


export { Magician };
