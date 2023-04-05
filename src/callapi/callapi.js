import axios from "axios";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `https://641c5ba41a68dc9e460777c7.mockapi.io/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
