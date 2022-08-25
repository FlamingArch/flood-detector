import "@testing-library/jest-dom";
import { geocode, httpGet, httpPost, reverseGeocode } from "../pages/helpers";

describe("Helper Functions", () => {
  it("Perform POST requests using httpGet()", () => {
    let data;
    httpGet("https://reqres.in/api/get", (e) => (data = e.data));
    expect(data.support.text).toBe(
      "To keep ReqRes free, contributions towards server costs are appreciated!"
    );
  });

  it("Perform POST requests using httpPost()", () => {
    let data;
    httpPost(
      "https://reqres.in/api/users",
      { latitude: 22.636295309999994, longitude: 75.85173033999997 },
      (res) => (data = JSON.stringify(res))
    );
    expect(data).toBe(
      JSON.stringify({
        latitude: 22.636295309999994,
        longitude: 75.85173033999997,
      })
    );
  });

  it("Performs geo-coding using geocode()", () => {
    let location;

    geocode("london", (data) => {
      reverseGeocode(data.lat, data.lng, (data) => (location = data));
    });
    expect(location).toBe("London, England, GB");
  });
});
