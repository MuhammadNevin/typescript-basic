// This file tests various looping constructs in TypeScript.
// It includes examples of:
// - For loops (standard, for...of, and for...in).
// - While and do...while loops.
// - Demonstrating the use of break and continue statements.
// Each test validates the behavior of the loop and ensures the expected output is achieved.

describe('Looping', function() {
    // for loop all example
    // for i
    it('should execute for loop correctly', function() {
        const numbers: number[] = [1, 2, 3, 4, 5];
        let sum: number = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i] ?? 0;
        }
        console.log(`Sum using for loop: ${sum}`);
        expect(sum).toBe(15);
    });
    // for...of example
    it('should execute for...of loop correctly', function() {
        const numbers: number[] = [1, 2, 3, 4, 5];
        let sum: number = 0;
        for (const num of numbers) {
            sum += num;
        }
        console.log(`Sum using for...of loop: ${sum}`);
        expect(sum).toBe(15);
    });
    // for...in example
    it('should execute for...in loop correctly', function() {
        const person = { name: 'John', age: 30, city: 'New York' };
        let info: string = '';
        for (const key in person) {
            info += `${key}: ${person[key as keyof typeof person]} `;
        }
        console.log(`Person info using for...in loop: ${info}`);
        expect(info).toContain('name: John');
        expect(info).toContain('age: 30');
        expect(info).toContain('city: New York');
    });

    // while loop example
    it('should execute while loop correctly', function() {
        let count: number = 0;
        let sum: number = 0;
        while (count < 5) {
            sum += count + 1;
            count++;
        }
        console.log(`Sum using while loop: ${sum}`);
        expect(sum).toBe(15);
    });

    // do...while loop example
    it('should execute do...while loop correctly', function() {
        let count: number = 0;
        let sum: number = 0;
        do {
            sum += count + 1;
            count++;
        } while (count < 5);
        console.log(`Sum using do...while loop: ${sum}`);
        expect(sum).toBe(15);
    });

    // Break dan Continue example
    it('should demonstrate break and continue in loops correctly', function() {
        const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let sumEven: number = 0;
        for (const num of numbers) {
            if (num % 2 !== 0) {
                continue; // skip odd numbers
            }
            if (num > 5) {
                break; // stop when number is greater than 5
            }
            sumEven += num;
        }
        console.log(`Sum of even numbers until 5: ${sumEven}`);
        expect(sumEven).toBe(6); // 2 + 4
    });
});