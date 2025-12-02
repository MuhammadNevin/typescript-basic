import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should have correct enum values', function () {
        const customer = {
            id: 1,
            name: 'John Doe',
            type: CustomerType.GOLD,
        };
        console.log(customer);
        expect(customer.type).toBe(CustomerType.GOLD);
    });
});
//# sourceMappingURL=enum.test.js.map