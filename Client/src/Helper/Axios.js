import axios from "axios";
import { API_BASE_URL } from "../config";

const axiosFetch = async ({ url, method, data = null }) => {
  try {
    const token = sessionStorage.getItem("token") ?? "";

    const response = await axios.request({
      url: API_BASE_URL + "/" + url,
      method,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;