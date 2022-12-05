abstract class Character {
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

  abstract attack(): void;
  abstract defend(): void;
}
export { Character };
