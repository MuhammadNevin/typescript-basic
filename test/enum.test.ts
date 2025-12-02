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