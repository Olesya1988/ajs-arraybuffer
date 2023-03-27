import Magician from '../magician';
import Daemon from '../daemon';

test('test getStoned of Magician without stoned', () => {
  const magician = new Magician('Magician');
  expect(magician.stoned).toEqual(undefined);
});

test('test getStoned of Magician with stoned', () => {
  const magician = new Magician('Magician');
  magician.stoned = true;
  expect(magician.stoned).toEqual(true);
});

test('test Magician without stoned distance 2', () => {
  const magician = new Magician('Magician');
  magician.setAttack(2);
  const correct = {
    attack: 90, name: 'Magician', type: 'Magician',
  };
  expect(magician).toEqual(correct);
});

test('test Magician with stoned distance 2', () => {
  const magician = new Magician('Magician');
  magician.stoned = true;
  magician.setAttack(2);
  const correct = {
    attack: 85, name: 'Magician', type: 'Magician', _stoned: true,
  };
  expect(magician).toEqual(correct);
});

test('test setAttack of Magician without stoned distance 1', () => {
  const magician = new Magician('Magician');
  magician.setAttack(1);
  expect(magician.getAttack()).toEqual(100);
});

test('test setAttack of Magician with stoned distance 4', () => {
  const magician = new Magician('Magician');
  magician.stoned = true;
  magician.setAttack(4);
  expect(magician.getAttack()).toEqual(60);
});

test('test getStoned of Daemon without stoned', () => {
  const daemon = new Daemon('Daemon');

  expect(daemon.stoned).toEqual(undefined);
});

test('test getStoned of Daemon with stoned', () => {
  const daemon = new Daemon('Daemon');
  daemon.stoned = true;

  expect(daemon.stoned).toEqual(true);
});

test('test Daemon without stoned distance 2', () => {
  const daemon = new Daemon('Daemon');
  daemon.setAttack(2);
  const correct = {
    attack: 90, name: 'Daemon', type: 'Daemon',
  };

  expect(daemon).toEqual(correct);
});

test('test Daemon with stoned distance 4', () => {
  const daemon = new Daemon('Daemon');
  daemon.stoned = true;
  daemon.setAttack(4);
  const correct = {
    attack: 60, name: 'Daemon', type: 'Daemon', _stoned: true,
  };

  expect(daemon).toEqual(correct);
});

test('test setAttack of Daemon without stoned distance 1', () => {
  const daemon = new Daemon('Daemon');
  daemon.setAttack(1);

  expect(daemon.getAttack()).toEqual(100);
});

test('test setAttack of Daemon without stoned distance 2', () => {
  const daemon = new Daemon('Daemon');
  daemon.setAttack(2);

  expect(daemon.getAttack()).toEqual(90);
});

test('test setAttack of Daemon with stoned distance 2', () => {
  const daemon = new Daemon('Daemon');
  daemon.stoned = true;
  daemon.setAttack(2);

  expect(daemon.getAttack()).toEqual(85);
});
