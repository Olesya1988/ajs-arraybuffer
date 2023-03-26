import ArrayBufferConverter from '../arraybufferconverter';

test('test of converting', () => {
  const newArrayBufferConverter = new ArrayBufferConverter();
  newArrayBufferConverter.load();
  expect(newArrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('test of error', () => {
  const newArrayBufferConverter = new ArrayBufferConverter();
  expect(() => {
    newArrayBufferConverter.toString();
  }).toThrow();
});
