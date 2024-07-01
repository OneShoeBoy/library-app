import axios from 'axios'

const baseURL = 'http://localhost:3001/books'

function getBooks() {
  const request = axios.get(baseURL);
  return request.then(response => response.data)
}

export default { getBooks }
