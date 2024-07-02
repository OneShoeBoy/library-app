import { useState, useEffect } from 'react'

import BookForm from './components/BookForm'

import libraryService from './services/libraryService'

const Book = ({ book }) => {
  return (
    <div>
      {book.title}
      <button>Delete book</button>
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
      <br></br>
      <BookForm />
    </div>
  )

}

export default App
