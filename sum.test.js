const sum = require("./sum");

test("adds 3 + 5 should equal 8", () => {
  expect(sum(3, 5)).toBe(8);
});
