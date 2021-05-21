// describe creates a local scope for before/after functions

// if suspicious about cross-talk failures, use test.only to isolate a test

const food = [];

const initializeFoodDatabase = () => {
  food.push("cucumber");
  food.push("potato");
};

describe("Non-food related tests", () => {
  beforeAll(() => {
    food.push("Wrong food");
  });

  test("Dummy test", () => {
    expect(food).toContain("Wrong food");
  });
});

describe("Food related tests", () => {
  beforeAll(() => {
    while (food.length > 0) {
      food.pop();
    }
    initializeFoodDatabase();
  });

  test("Food should contain potato", () => {
    expect(food[1]).toBe("potato");
  });

  test("Food should contain cucumber", () => {
    expect(food).toContain("cucumber");
  });
});
