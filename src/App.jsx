import { useState, useEffect } from 'react'

import Library from './components/Library'
import AddBook from './components/AddBook'

import libraryService from './services/libraryService'




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
      <AddBook />
    </div>
  )

}

export default App
