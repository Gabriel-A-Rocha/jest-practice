let cities = ["incorrect initial state"];

beforeAll(() => {
  cities = [];
});

beforeEach(async () => {
  const initiateCities = () => {
    return new Promise((resolve) => {
      cities.push("Toronto");
      cities.push("Vancouver");
      resolve();
    });
  };

  await initiateCities();
});

afterEach(() => {
  while (cities.length > 0) {
    cities.pop();
  }
});

test("First city should be Toronto", () => {
  expect(cities[0]).toBe("Toronto");
});

test("Cities array should include Vancouver", () => {
  expect(cities).toContain("Vancouver");
});
