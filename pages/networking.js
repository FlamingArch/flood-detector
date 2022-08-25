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
    .then((e) => {
      console.log(`HTTPPOST::response => ${JSON.stringify(e)}`);
      success && success(e);
    })

    .catch((e) => {
      console.log(`HTTPPOST::error => ${JSON.stringify(e)}`);
      failure && failure(e);
    });
};
