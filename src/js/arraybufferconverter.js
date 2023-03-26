import getBuffer from './arraybuffer';

export default class ArrayBufferConverter {
  load() {
    const buffer = getBuffer();
    this.receivedData = new Uint16Array(buffer);
  }

  toString() {
    if (!this.receivedData) {
      throw new Error('Data not loaded');
    }

    let str = '';

    for (let i = 0; i < this.receivedData.length; i += 1) {
      str += String.fromCharCode(this.receivedData[i]);
    }

    return str;
  }
}
