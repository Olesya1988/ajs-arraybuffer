export default class Maths {
  constructor(name, type, stoned) {
    this.name = name;
    this.type = type;
    this.attack = undefined;
    this._stoned = stoned;
  }

  set stoned(updatedStoned) {
    this._stoned = updatedStoned;
  }

  get stoned() {
    return this._stoned;
  }

  setAttack(distance) {
    const damage = 1 - ((distance / 10) - 0.1);
    this.attack *= damage;

    if (this.stoned) {
      this.attack -= Math.log2(distance) * 5;
    }
  }

  getAttack() {
    return this.attack;
  }
}
