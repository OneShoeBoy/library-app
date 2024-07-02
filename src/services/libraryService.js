import axios from 'axios'

const baseURL = 'http://localhost:3001/books'

function getBooks() {
  const request = axios.get(baseURL);
  return request.then(response => response.data);
}

function createBook(bookObject) {
  const request = axios.post(baseURL, bookObject);
  return request.then(response => response.data);
}

function updateBook(id, bookObject) {
  const request = axios.put(`${baseURL}/${id}`, bookObject);
  return request.then(response => response.data);
}

function deleteBook(id) {
  const request = axios.get(baseURL);
  return request.then(axios.delete(`${baseURL}/id`).then(response => response.data));
}

export default { getBooks, createBook, updateBook, deleteBook }
