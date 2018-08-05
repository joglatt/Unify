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
    },

    emailPeople: function (body) {
        // Not sure if this is how you do this.
        return axios.post("/api/user/messages", body)
    },

    // getLoggedInUser: function () {
    //     axios.get("/user/profile").then(response => {
    //         // console.log("full response: " + response);
    //         // // console.log("Get user response: ");
    //         // console.log(response.data);
    //         // console.log("this is the username: " + response.data.user.username);
    //         // console.log("this is the frontend info: " + response.data.user.frontEnd);
    //         if (response.data.user) {
    //             console.log("Get User: There is a user saved in the server session: ");
    //             return this.getUsers(response.data.user._id);
    //         } else {
    //             console.log("Get user: no user");
    //             return {
    //                 loggedIn: false,
    //                 username: null
    //             };
    //         }
    //     });

    // }
};
