import axios from "axios";

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
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  }
//   patchBook: function (id, bookData) {
//     return axios.patch("/api/books/" + id, bookData);
//   },
};
