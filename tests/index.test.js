import "@testing-library/jest-dom";
import { httpGet, httpPost } from "../pages/helpers";

describe("Helper Functions", () => {
  it("Perform POST requests using httpGet()", () => {
    let data;
    httpGet("https://reqres.in/api/get", (e) => (data = e));
    expect(data).toEqual({
      name: "Bond",
      james: "Bond",
    });
  });

  it("Perform POST requests using httpPost()", () => {
    let data;
    httpPost(
      "https://reqres.in/api/users",
      { latitude: 22.636295309999994, longitude: 75.85173033999997 },
      (res) => (data = JSON.stringify(res.data))
    );
    expect(data).toEqual(
      JSON.stringify({
        latitude: 22.636295309999994,
        longitude: 75.85173033999997,
      })
    );
  });
});
