const { API_BASE_URL } = require("../appConfig");
const axios = require("axios");

export async function call(api, method, request) {
  try {
    const options = {
      method: method,
      url: API_BASE_URL + api,
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    if (request) {
      options.data = request;
    }
    const response = await axios(options);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      console.log(error);
    }
  }
}
