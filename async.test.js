// callback

// the done function must be used to test callbacks

test("Data should be coffee", (done) => {
  const item = "coffee";

  function callback(data) {
    try {
      expect(data).toBe("coffee");
      done();
    } catch (error) {
      done(error);
    }
  }

  setTimeout(() => {
    console.log(item);
    return callback(item);
  }, 3000);
});
