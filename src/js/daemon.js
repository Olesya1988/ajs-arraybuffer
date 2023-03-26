import Maths from './math';

export default class Daemon extends Maths {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 100;
  }
}
