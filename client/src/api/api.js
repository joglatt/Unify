import axios from "axios";

export default {

    getAllUsers: function () {
        return axios.get("/api/allusers");

    },

    // searchUser:  function (searchData) {
    //   return axios.get("/api/users" + searchData);
    // },


    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },

    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },

    patchUser: function (id, userData) {
        return axios.patch("/api/users/" + id, userData);
    },

    search: function(data) {
        return axios.get("/api/users", {
            params: data
        })
    },

    searchFrontendUser: function (id) {
        return axios.get("/api/users/frontend/" + id);

    },

    searchBackendUser: function (id) {
        return axios.get("/api/users/backend/" + id);
    },

    searchUserLocation: function (id) {
        return axios.get("/api/users/location/" + id);

    }
};
