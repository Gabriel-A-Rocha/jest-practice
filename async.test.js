// callbacks

// done() must be used to test callbacks
// try/catch block is needed to log the failure reason (otherwise will be a timeout)

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
    return callback(item);
  }, 1000);
});

// promises

const asyncFunction = async (item) => {
  return new Promise((resolve, reject) => {
    try {
      if (item === "tea") {
        resolve(item);
      } else {
        throw new Error("Data received is not tea");
      }
    } catch (error) {
      reject(error);
    }
  });
};

test("Data should be tea", async () => {
  const data = "tea";

  return asyncFunction(data).then((res) => {
    expect(res).toBe("tea");
  });
});

test("Should throw if data is not tea", async () => {
  const data = "not-tea";

  return asyncFunction(data).catch((rej) => {
    expect(rej).toBeInstanceOf(Error);
  });
});

test("Test happy path with resolves", async () => {
  const data = "tea";

  return expect(asyncFunction(data)).resolves.toBe("tea");
});

test("Test exception with rejects", async () => {
  const data = "not-tea";

  return expect(asyncFunction(data)).rejects.toBeInstanceOf(Error);
});
