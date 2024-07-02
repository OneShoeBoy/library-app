import Book from './Book'

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

export default Library
