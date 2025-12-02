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