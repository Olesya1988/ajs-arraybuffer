export default class Maths {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.attack = undefined;
  }

  setStoned() {
    this.stoned = true;
  }

  getStoned() {
    return this.stoned;
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
