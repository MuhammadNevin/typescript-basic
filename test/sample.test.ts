// Union Type, sample variable
describe("Union Type", function () {
  it("Variable with Union Type", function () {
    let identifier: string | number | boolean = "Nevin";
    console.log("Identifier as String:", identifier);

    identifier = 12345;
    console.log("Identifier as Number:", identifier);

    identifier = true;
    console.log("Identifier as Boolean:", identifier);
  });

    // Union Type in Function Parameter
    it("Function Parameter with Union Type", function () {
        function displayId(value: string | number | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 20
            } else {
                return value ? "Active" : "Inactive";
            }
        }

        expect(displayId("nevin")).toBe("NEVIN");
        expect(displayId(30)).toBe(50);
        expect(displayId(false)).toBe("Inactive");
    });
});