// Function sayHello

describe('Function', function() {
    it('should say hello correctly', function() {
        function sayHello(name: string): string {
            return `Hello, ${name}!`;
        }
        const greeting = sayHello('World');
        console.log(greeting);
        expect(greeting).toBe('Hello, World!');
    });

    // return value void example
    it('should log message correctly with void return type', function() {
        function logMessage(message: string): void {
            console.log(`Log: ${message}`);
        }
        logMessage('This is a test message.');
        expect(true).toBe(true); // Dummy assertion for test purposes
    });

    // function ... parameters example
    it('should sum numbers correctly with rest parameters', function() {
        function sumNumbers(...numbers: number[]): number {
            let total = 0;
            for (const num of numbers) {
                total += num;
            }
            return total;
        }
        const sum = sumNumbers(1, 2, 3, 4, 5);
        console.log(`Sum: ${sum}`);
        expect(sum).toBe(15);
    });

    // Function optional parameters example
    it('should greet correctly with optional parameters', function() {
        function greet(name: string, greeting?: string): string {
            if (greeting) {
                return `${greeting}, ${name}!`;
            }
            return `Hello, ${name}!`;
        }
        const greet1 = greet('Alice');
        const greet2 = greet('Bob', 'Good morning');
        console.log(greet1);
        console.log(greet2);
        expect(greet1).toBe('Hello, Alice!');
        expect(greet2).toBe('Good morning, Bob!');
    });

    // Explain function overloading example
    // Explain with comments
    // function overloads is a way to define multiple function signatures for a single function implementation.
    it('should demonstrate function overloading', function() {
        function combine(a: string, b: string): string;
        function combine(a: number, b: number): number;
        function combine(a: any, b: any): any {
            if (typeof a === 'string' && typeof b === 'string') {
                return a + b;
            }
            if (typeof a === 'number' && typeof b === 'number') {
                return a * b;
            }
            throw new Error('Invalid arguments');
        }
        const combinedString = combine('Hello, ', 'World!');
        const combinedNumber = combine(5, 10);
        console.log(combinedString);
        console.log(combinedNumber);
        expect(combinedString).toBe('Hello, World!');
        expect(combinedNumber).toBe(50);
    });

    // function as parameter example
    it('should use function as parameter correctly', function() {
        function operateOnNumbers(a: number, b: number, operation: (x: number, y: number) => number): number {
            return operation(a, b);
        }
        function add(x: number, y: number): number {
            return x + y;
        }
        function multiply(x: number, y: number): number {
            return x * y;
        }
        const sum = operateOnNumbers(3, 4, add);
        const product = operateOnNumbers(3, 4, multiply);
        // Using an anonymous function
        const minus = operateOnNumbers(3, 4, function(x, y) { return x - y; });
        // arrow function
        const power = operateOnNumbers(3, 4, (x, y) => Math.pow(x, y));

        console.log(`Sum: ${sum}`);
        console.log(`Product: ${product}`);
        console.log(`Minus: ${minus}`);
        console.log(`Power: ${power}`);
        expect(sum).toBe(7);
        expect(product).toBe(12);
        expect(minus).toBe(-1);
        expect(power).toBe(81);
    });

});