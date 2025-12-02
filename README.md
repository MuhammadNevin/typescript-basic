# TypeScript Basic Learning Project

This project is designed as a comprehensive introduction to TypeScript, covering its fundamental concepts and features. It is aimed at developers who want to learn TypeScript from the ground up and understand how to use it effectively in their projects.

## Project Structure

The project is organized into the following directories:

- **src/**: Contains the TypeScript source files that demonstrate various TypeScript features.
  - `enum.ts`: Demonstrates the use of enums in TypeScript.
  - `say-hello.ts`: A simple example of a function in TypeScript.
  - `type-alias.ts`: Explains the use of type aliases.

- **test/**: Contains test files to validate the functionality of the TypeScript code.
  - `alias.test.ts`: Tests for type aliases.
  - `any.test.ts`: Tests for the `any` type.
  - `array.test.ts`: Tests for arrays in TypeScript.
  - `enum.test.ts`: Tests for enums.
  - `object.test.ts`: Tests for objects.
  - `sample.test.ts`: Sample tests for basic TypeScript features.
  - `say-hello.test.ts`: Tests for the `sayHello` function.
  - `test.test.ts`: General tests.
  - `tipe-data.test.ts`: Tests for various data types.
  - `looping.test.ts`: Tests for looping constructs.

## Key Concepts Covered

This project covers the following TypeScript concepts:

1. **Basic Types**:
   - `string`, `number`, `boolean`, `array`, `tuple`, `enum`, etc.
2. **Type Aliases**:
   - Creating custom types using `type`.
3. **Interfaces**:
   - Defining contracts for objects.
4. **Enums**:
   - Using enums to define a set of named constants.
5. **Functions**:
   - Typing function parameters and return values.
6. **Objects**:
   - Defining object shapes and using `keyof`.
7. **Loops**:
   - Using `for`, `for...of`, `for...in`, `while`, and `do...while` loops.
8. **Advanced Types**:
   - Union types, intersection types, and type assertions.
9. **Testing**:
   - Writing tests to validate TypeScript code using a test runner (e.g., Jest or Mocha).

## How to Run the Project

1. **Install Dependencies**:
   Make sure you have Node.js installed. Then, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

2. **Compile TypeScript**:
   To compile the TypeScript files into JavaScript, run:
   ```bash
   npm run build
   ```

3. **Run Tests**:
   To execute the test cases, use:
   ```bash
   npm test
   ```

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)
- Basic understanding of JavaScript

## Goals

The goal of this project is to provide a hands-on learning experience for TypeScript. By working through the examples and tests, you will gain a solid understanding of TypeScript's core features and how to use them in real-world applications.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. Feel free to use and modify it as you see fit.