// test for say-hello.ts
import { sayHello } from '../src/say-hello';

describe('sayHello', function () {
  it('should return greeting message with the provided name', function () {
    const result = sayHello('Nevin');
    expect(result).toBe('Hello, Nevin!');
  });
});
