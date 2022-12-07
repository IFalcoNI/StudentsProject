abstract class Character {
  private health: number;
  private power: number;

  constructor(health: number, power: number) {
    this.health = health;
    this.power = power;
  }

  get getHp(): number {
    return this.health;
  }
  set setHp(hp: number) {
    this.health = hp;
  }
  get getPower(): number {
    return this.power;
  }
  set setPower(power: number) {
    this.power = power;
  }

  abstract attack(): void;
  abstract defend(): void;
}
export { Character };
