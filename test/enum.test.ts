// This file tests the usage of enums in TypeScript.
// Enums are used to define a set of named constants.
// The test demonstrates creating an enum for customer types and using it in an object.
// It also validates that the enum value is correctly assigned and used.

// enum from enum.ts
import type { Customer } from "../src/enum";
import { CustomerType } from "../src/enum";

describe('Enum', function() {
    it('should have correct enum values', function() {
        const customer: Customer = {
            id: 1,
            name: 'John Doe',
            type: CustomerType.GOLD,
        };

        console.log(customer);
        expect(customer.type).toBe(CustomerType.GOLD);
    });
});