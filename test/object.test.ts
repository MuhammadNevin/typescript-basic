// Object
describe("Object", function () {
  it("Variable with Object Type", function () {
    const person: { id: number, name: string, isActive: boolean, hobbies?: string[]} = {
        id: 1,
        name: "Nevin",
        isActive: true,
    };
    console.log("Person:", person);
    expect(person.id).toBe(1);
    expect(person.name).toBe("Nevin");
    expect(person.isActive).toBe(true);
    });
});