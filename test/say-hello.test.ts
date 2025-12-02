// This file tests the functionality of the 'sayHello' function from say-hello.ts.
// The test ensures that the function returns the correct greeting message when provided with a name.

import { sayHello } from '../src/say-hello';

describe('sayHello', function () {
  it('should return greeting message with the provided name', function () {
    const result = sayHello('Nevin');
    expect(result).toBe('Hello, Nevin!');
  });
});
