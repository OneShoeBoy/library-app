import constructBook from "../utils/construct-book"

const BookForm = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modalTitle">
        <h3>Add new book</h3>
      </div>
      <form className="modalForm">
        <div>
          Title: <input />
        </div>
        <div>
          Author: <input />
        </div>
        <div>
          Read: <input type='checkbox' />
        </div>
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  )
}

export default BookForm

