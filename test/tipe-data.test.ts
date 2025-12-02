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