// callbacks

// done() must be used to wait for callbacks
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

test("Test happy path with resolves", () => {
  const data = "tea";

  return expect(asyncFunction(data)).resolves.toBe("tea");
});

test("Test exception with rejects", () => {
  const data = "not-tea";

  return expect(asyncFunction(data)).rejects.toBeInstanceOf(Error);
});

// async/await

// catch must be used to test throws

test("Data should be tea using async/await", async () => {
  const data = "tea";

  const response = await asyncFunction(data);

  expect(response).toBe("tea");
});

test("Data should throw when rejected", async () => {
  const data = "not-tea";

  try {
    await asyncFunction(data);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});

test("Test async/await with resolves", () => {
  const data = "tea";

  return expect(asyncFunction(data)).resolves.toBe("tea");
});

test("Test async/await with rejects", async () => {
  const data = "not-tea";

  await expect(asyncFunction(data)).rejects.toBeInstanceOf(Error);
});
