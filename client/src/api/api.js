import axios from "axios";

export default {
// Gets all books
  getAllUsers: function () {
    return axios.get("/api/allusers");
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id);
  }
//   // Deletes the book with the given id
//   deleteBook: function (id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   patchBook: function (id, bookData) {
//     return axios.patch("/api/books/" + id, bookData);
//   },
};
