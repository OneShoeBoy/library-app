import { useState } from 'react'

const BookForm = () => {
  return (
    <div>
      <button>Add a new book</button>
    </div>
  )
}
const Book = ({ title }) => {
  return (
    <div>
      <ul>
        <li>{title}</li>
      </ul>
    </div>
  )
}

const Library = ({ title }) => {
  return (
    <div>
      <h2>Books</h2>
      <Book title={title} />
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Library</h1>
      <Library title='Some title' />
      <BookForm />
    </div>
  )

}

export default App
