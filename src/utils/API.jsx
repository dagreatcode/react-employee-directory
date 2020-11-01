import axios from "axios";

const URL = "https://randomuser.me/api/?results=20";

export default {
  getEmployees: function() {
    return axios.get(URL);
  }
};