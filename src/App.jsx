import { useState, useEffect } from 'react'

import libraryService from './services/libraryService'

const BookForm = () => {
  return (
    <div>
      <button>Add a new book</button>
    </div>
  )
}
const Book = ({ book }) => {
  return (
    <div>
      <p>{book.title}</p>
    </div>
  )
}

const Library = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      {books.map(book =>
        <Book
          key={book.id}
          book={book}
        />
      )}
    </div>
  )
}


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    libraryService.getBooks().then(initialBooks => {
      setBooks(initialBooks)
      console.log(books)
    })
  }, [])


  return (
    <div>
      <h1>Library</h1>
      <Library books={books} />
      <BookForm />
    </div>
  )

}

export default App
