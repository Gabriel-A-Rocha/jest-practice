const globalArray = [];

const callbackFunction = (item) => {
  globalArray.push(item);
};

const myFunction = (array, callbackFunction) => {
  for (let i = 0; i < array.length; i++) {
    callbackFunction(array[i]);
  }
};

myFunction([2, 2, 2, 2], callbackFunction);

// mock function

const mockCallback = jest.fn((item) => {
  globalArray.push(item);
  return item * 2;
});

test("mock callback should be called with correct parameter", () => {
  myFunction([5, 6, 7, 8], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(4);
  expect(mockCallback.mock.calls[0][0]).toBe(5);
  expect(mockCallback.mock.calls[1][0]).toBe(6);
  expect(mockCallback.mock.results[0].value).toBe(10);
  expect(mockCallback.mock.results[1].value).toBe(12);
});

const mockCallbackEmpty = jest.fn();

test("mock function should be called 3 times", () => {
  myFunction([0, 4, 8], mockCallbackEmpty);
  expect(mockCallbackEmpty.mock.calls.length).toBe(3);
  expect(mockCallbackEmpty.mock.calls[0][0]).toBe(0);
  expect(mockCallbackEmpty.mock.calls[1][0]).toBe(4);
  expect(mockCallbackEmpty.mock.calls[2][0]).toBe(8);
  expect(mockCallbackEmpty.mock.instances.length).toBe(3);
});

const mockCallbackFakeReturns = jest.fn().mockReturnValueOnce("tarzan").mockReturnValue("jane");

test("mock function should return tarzan and jane", () => {
  myFunction([3, 2, 1], mockCallbackFakeReturns);
  expect(mockCallbackFakeReturns.mock.calls.length).toBe(3);
  expect(mockCallbackFakeReturns.mock.results[0].value).toBe("tarzan");
  expect(mockCallbackFakeReturns.mock.results[1].value).toBe("jane");
  expect(mockCallbackFakeReturns.mock.results[1].value).toBe("jane");
});
