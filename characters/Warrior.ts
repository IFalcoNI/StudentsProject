class Warrior {
  private _health: number = 200;
  private _power: number = 50;
  constructor(health: number, power: number) {
    this._health = health;
    this._power = power;
  }
  get hp(): number {
    return this._health;
  }
  set hp(hp: number) {
    this._health = hp;
  }
  get power(): number {
    return this._power;
  }
  set power(power: number) {
    this._power = power;
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

const warrior = new Warrior(200, 50);
