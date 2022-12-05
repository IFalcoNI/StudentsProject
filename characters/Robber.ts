class Robber {
  private _health: number;
  private _power: number;
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
    console.log('Atacking with bow');
  }
  defend() {
    console.log('Code for defending here');
    console.log('Running away');
  }
}

const robber = new Robber(100, 25);
