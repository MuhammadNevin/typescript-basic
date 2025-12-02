describe('Interface', function () {
    it('should create a Seller object correctly', function () {
        const seller = {
            id: 1,
            name: 'Alice',
            rating: 4.5,
            bio: 'Top-rated seller specializing in electronics.',
            establishedYear: 2010,
            isActive: true,
        };
        console.log(seller);
        seller.name = "Nevin"; // Modifying non-readonly property
        // seller.establishedYear = 2012; // Error: Cannot assign to 'establishedYear' because it is a read-only property.
        console.log(seller);
        expect(seller.name).toBe('Nevin');
        expect(seller.rating).toBe(4.5);
    });
    // Function interface example
    it('should use a function interface correctly', function () {
        ;
        const applyDiscount = function (price, discount) {
            return price - (price * discount) / 100;
        };
        const originalPrice = 200;
        const discountPercent = 15;
        const finalPrice = applyDiscount(originalPrice, discountPercent);
        console.log(`Final Price after ${discountPercent}% discount on $${originalPrice} is $${finalPrice}`);
        expect(finalPrice).toBe(170);
    });
    // Array interface example
    it('should use an array interface correctly', function () {
        ;
        const sellers = [
            { id: 1, name: 'Bob', rating: 4.2 },
            { id: 2, name: 'Carol', rating: 4.8, bio: 'Specializes in handmade crafts.' },
        ];
        console.log(sellers);
    });
    // Object interface example
    it('should use an object interface correctly', function () {
        ;
        const sellerDirectory = {
            'seller1': { id: 1, name: 'Dave', rating: 4.0 },
            'seller2': { id: 2, name: 'Eve', rating: 4.9, bio: 'Expert in vintage items.' },
        };
        console.log(sellerDirectory);
        expect(sellerDirectory['seller2']?.name).toBe('Eve');
    });
    // Interface extension example
    it('should create a Manager object extending Employee correctly', function () {
        const manager = {
            id: 1,
            name: 'Frank',
            position: 'Sales Manager',
            salary: 80000,
            department: 'Sales',
            numberOfEmployees: 10,
        };
        const employee = {
            id: 2,
            name: 'Grace',
            position: 'Sales Executive',
            salary: 50000,
        };
        console.log(manager);
        console.log(employee);
        expect(manager.department).toBe('Sales');
        expect(employee.position).toBe('Sales Executive');
    });
    // Support Function interface example
    it('should use a support function interface correctly', function () {
        const person = {
            name: 'Hank',
            age: 35,
            greet(name) {
                return `Allow me to introduce myself, I am ${this.name}.`;
            }
        };
        console.log(person.greet('Hank'));
        expect(person.greet('Hank')).toBe('Allow me to introduce myself, I am Hank.');
    });
    // Intersection interface example
    it('should create an object with intersection interface correctly', function () {
        const profile = {
            email: 'nevin.muhammad@gmail.com',
            phone: '123-456-7890',
            street: '123 Main St',
            city: 'Surabaya',
            country: 'Indonesia',
        };
        console.log(profile);
        expect(profile.city).toBe('Surabaya');
    });
    // Type Assertion with Interface example, Person
    it('should use type assertion with Person interface correctly', function () {
        const person = {
            name: 'Ivy',
            age: 28,
        };
        const person2 = person;
        console.log(person2);
    });
});
export {};
//# sourceMappingURL=interface.test.js.map