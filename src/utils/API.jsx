import axios from "axios";

const URL = "https://randomuser.me/api/";

export default {
  getEmployees: function() {
    return axios.get(URL);
  }
};