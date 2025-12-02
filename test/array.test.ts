// Array

describe("Array", function () {
  it("Array of Numbers", function () {
    let numbers: number[] = [1, 2, 3, 4, 5];
    let names: Array<string> = ["Nevin", "Budi", "Siti"];

    console.log("Numbers:", numbers);
    console.log("Names:", names);
    
  });

//   Read only array
    it("Read Only Array", function () {
        let readOnlyNumbers: ReadonlyArray<number> = [10, 20, 30, 40, 50];
        console.log("Read Only Numbers:", readOnlyNumbers);
        console.log("First Element:", readOnlyNumbers[0]);

        // readOnlyNumbers[0] = 100; // Error: Index signature in type 'readonly number[]' only permits reading
    });

    // Tuple
    it("Tuple", function () {
        let user: readonly[string, number, boolean] = ["Nevin", 25, true];
        console.log("User Tuple:", user);
    });

    // Any Data Type
    it("Array of Any Data Type", function () {
        let mixedArray: any = {
            id: 1,
            name: "Nevin",
            isActive: true,
        };
        console.log("Mixed Array:", mixedArray);
    });
});