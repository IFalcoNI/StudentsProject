import { Character } from '../characters/Character';
import { Magician } from '../characters/Magician';
import { Robber } from '../characters/Robber';
import { Warrior } from '../characters/Warrior';

enum CharacterOptions {
  magician = 'Magician',
  robber = 'Robber',
  warrior = 'Warrior'
}
class Provider {
  static createCharacter(characterType: string): Character {
    if (characterType === 'Magician') {
      return new Magician(80, 100);
    } else if (characterType === 'Robber') {
      return new Robber(100, 25);
    } else if (characterType === 'Warrior') {
      return new Warrior(200, 50);
    } else {
      throw Error('Wrong character');
    }
  }
}
class CharacterAction {
  character: Character;
  constructor(characterType: string) {
    this.character = Provider.createCharacter(characterType);
  }
  attack() {
    this.character.attack();
  }

  defense() {
    this.character.defense();
  }
}

const magician = new CharacterAction(CharacterOptions.magician);
magician.attack();
