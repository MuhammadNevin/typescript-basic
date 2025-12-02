// This file tests the usage of the 'any' type in TypeScript.
// The 'any' type allows variables to hold values of any type, bypassing type checking.
// The test demonstrates creating an object with the 'any' type and dynamically adding or modifying its properties.

describe("Any Data Type", function () {
  it("Variable with Any Data Type", function () {
    const person: any = {
      id: 1,
      name: "Nevin",
      isActive: true,
    };
    console.log("Person:", person);

    person.age = 30;
    person.name = "Budi";
    console.log("Updated Person:", person);
    });
});