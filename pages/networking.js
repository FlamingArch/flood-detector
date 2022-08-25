import axios from "axios";

export const httpGet = (url, success, failure) => {
  axios.get(url).then(success).catch(failure);
};
