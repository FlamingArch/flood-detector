import axios from "axios";

export const httpGet = (url, success, failure) => {
  axios.get(url).then(success).catch(failure);
};

export const httpPost = (url, data, success, failure) => {
  axios
    .post(
      url || "https://reqres.in/api/users",
      data || {
        lat: 22.636295309999994,
        lng: 75.85173033999997,
      }
    )
    .then(success || ((e) => console.log(e)))
    .catch(failure || ((e) => console.log("NETWORK ERROR: ", e)));
};
