test("Entries of two objects should be equal", () => {
  const first = { one: 1 };
  const second = { one: 1, two: 2 };

  first["two"] = 2;

  expect(first).toEqual(second);
});

// toBe --> exact equality (Object.is)
// toEqual --> check values

test("Result should not be zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
