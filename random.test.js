test("Entries of two objects should be equal", () => {
  const first = { one: 1 };
  const second = { one: 1, two: 2 };

  first["two"] = 2;

  expect(first).toEqual(second);
});

// toBe --> exact equality (Object.is)
// toEqual --> check values
// toBe and toEqual are equivalent for numbers

test("Result should not be zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("String should not be undefined", () => {
  const name = "Sarah";
  expect(name).toBeDefined();
  expect(name).toBeTruthy();
});

test("Empty string should be falsy", () => {
  const str = "";
  expect(str).toBeFalsy();
});

test("Comparing float numbers", () => {
  const sum = 1.46 + 2.73;
  /*
  expect(sum).toBe(4.19); 
  Expected: 4.19
  Received: 4.1899999999999995
  */
  expect(sum).toBeCloseTo(4.19);
});

test("Substring should be contained in a string", () => {
  expect("Elizabeth").toMatch(/beth/);
});

test("Item should be present in an array", () => {
  const shoppingList = ["butter", "coffee", "bread"];

  expect(shoppingList).toContain("coffee");
});

test("Function should throw", () => {
  const func = () => {
    throw new Error("Missing parameter");
  };
  expect(() => func()).toThrow(/parameter/);
});
