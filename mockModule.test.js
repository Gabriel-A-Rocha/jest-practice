const axios = require("axios");

class EntertainmentFinder {
  static async suggestActivity() {
    const url = "https://www.boredapi.com/api/activity";
    const response = await axios.get(url);
    return response.data;
  }
}

jest.mock("axios");

test("activity inquiry should return bubble bath", async () => {
  axios.get.mockResolvedValue({ data: "bubble bath" });
  const activity = await EntertainmentFinder.suggestActivity();
  expect(activity).toBe("bubble bath");
});

test("activity should be play soccer", async () => {
  axios.get.mockImplementation(() => {
    return new Promise((resolve) => {
      resolve({ data: "play soccer" });
    });
  });
  const activity = await EntertainmentFinder.suggestActivity();
  expect(activity).toBe("play soccer");
});

test("API call should have been called", async () => {
  axios.get.mockResolvedValue({ data: "anything" });
  const activity = await EntertainmentFinder.suggestActivity();
  expect(axios.get).toHaveBeenCalled();
  expect(activity).toBe("anything");
});
