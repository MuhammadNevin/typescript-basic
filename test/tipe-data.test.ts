// This file tests the usage of basic data types in TypeScript.
// It includes examples of string, number, and boolean types.
// The test validates that variables of these types hold the expected values and demonstrates type safety.

// Tipe Data
describe('Tipe Data Dasar di TypeScript', function () {
  it('Tipe Data String', function () {
    let name: string = 'Nevin';
    let balance: number = 1000;
    let isVIP: boolean = true;

    console.log(`Name: ${name}, Balance: ${balance}, VIP: ${isVIP}`);

    // name = 10; // Error: Type 'number' is not assignable to type 'string'
    // balance = '1000'; // Error: Type 'string' is not assignable to type 'number'
    // isVIP = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'
  });
});