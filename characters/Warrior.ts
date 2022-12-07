import { Character } from './Character';
class Warrior extends Character {
  constructor(health: number, power: number) {
    super(health, power);
  }
  attack() {
    console.log('Code for atack here');
    console.log('Atacking with sword');
  }
  defend() {
    console.log('Code for defending here');
    console.log('Raised the shield');
  }
}

export { Warrior };
