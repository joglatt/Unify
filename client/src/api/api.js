import axios from "axios";

export default {

  getAllUsers: function () {
    return axios.get("/api/allusers");
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  patchUser: function (id, userData) {
    return axios.patch("/api/users/" + id, userData);
  },
};
