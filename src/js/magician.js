import Maths from './math';

export default class Magician extends Maths {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 100;
  }
}
