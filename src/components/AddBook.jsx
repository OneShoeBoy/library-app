import { useState } from 'react';
import { createPortal } from 'react-dom'
import BookForm from "./BookForm";

const AddBook = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Add new book
      </button>
      {showModal && createPortal(
        <BookForm onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

export default AddBook
