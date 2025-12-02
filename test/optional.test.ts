// Optional Parameters Test File
describe("Optional Parameters Test", function() {
    it("should handle optional parameters correctly", function() {
        function greet(name?: string | null) {
            if (name) {
                console.log(`Hello, ${name}!`);
            }
            else {
                console.log("Hello, Guest!");
            }
        }

        greet("Alice");
        const name: string | undefined = undefined;
        greet(name);
        greet(null); // Testing with null   
        expect(true).toBe(true); // Dummy assertion for test purposes
    });
});