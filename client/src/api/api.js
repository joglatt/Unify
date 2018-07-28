import axios from "axios";
//const router = require("express").Router();
//const userFunctions = require("../utils//controller.js");
export default {

  // Gets all books
  //   getBooks: function () {
  //     return axios.get("/api/books");
  //   },
  //   // Deletes the book with the given id
  //   deleteBook: function (id) {
  //     return axios.delete("/api/books/" + id);
  //   },
  //   // Saves a book to the database
  //   saveBook: function (bookData) {
  //     return axios.post("/api/books", bookData);
  //   },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  }
  //   patchBook: function (id, bookData) {
  //     return axios.patch("/api/books/" + id, bookData);
  //   },
=======

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

//router.get("/api/users", userFunctions.findById);
