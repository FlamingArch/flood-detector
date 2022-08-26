import axios from "axios";

export const constants = {
  debug: true,
  debugMap: false,
  apiUrl: "https://sea-lion-app-kps86.ondigitalocean.app/",
  alwaysUseFallbackData: false,
  updateData: false,
  invalidateOldDataOnRefetch: true,
  fallbackLocation: {
    lat: 22.636295309999994,
    lng: 75.85173033999997,
  },
  fallbackData: {
    size: 2,
    data: [
      {
        latitude: 44,
        longitude: -80,
        class: "flood",
        temperature: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
      {
        latitude: 44,
        longitude: -80,
        class: "normal",
        temp: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
    ],
    blockage: [],
  },
  useGeolocatedOptions: {
    positionOptions: { enableHighAccuracy: true },
    userDecisionTimeout: 12000,
  },
  openWeatherMapEndpoint: "http://api.openweathermap.org/geo/1.0/",
};

export const debugPrint = (val) => {
  if (constants.debug) console.log(val);
};

export const httpGet = (url, success, failure) => {
  axios.get(url).then(success).catch(failure);
};

export const httpPost = (url, data, completion, error) => {
  axios.post(url, data).then(completion).catch(error);
};

export const geocode = (location, callback) => {
  location = location.replace(" ", ",");
  var url = `${constants.openWeatherMapEndpoint}direct?q=${location}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_APIKEY}`;
  if (location === "" && location == undefined) return;
  debugPrint(`geocode: ${location}`);
  httpGet(url, (e) => {
    debugPrint(`geocode: ${location} ${e}`);
    callback({ lat: e.data[0].lat, lng: e.data[0].lon });
  });
};

export const reverseGeocode = (lat, lng, callback) => {
  var url = `${constants.openWeatherMapEndpoint}reverse?lat=${lat}&lon=${lng}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_APIKEY}`;
  debugPrint(`reverseGeocode: ${url}`);
  httpGet(url, (e) => {
    const location = `${e.data[0].name}, ${e.data[0].state}, ${e.data[0].country}`;
    debugPrint(`reverseGeocode: ${location} ${e}`);
    callback(location);
  });
};

export const getCoordinatesFromString = (str) => {
  str = str.replace(/[( )]/g, "");
  str = str.split(",");
  return { lat: Number.parseFloat(str[0]), lng: Number.parseFloat(str[1]) };
};
