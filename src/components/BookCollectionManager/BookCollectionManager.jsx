import React, { useState } from "react";
import "./BookCollectionManager.css";
import Book from "./Book.jsx"

/*I feel ike I tried to make this easier on myself, and ended up just making things worse and more confusing. jesus christ. */

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Handle input change for genre
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  // Handle input change for languege
  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  // Handle input change for aedition
  function handleEditionChange(event) {
    setEdition(event.target.value);
  }

  // Handle input change for apages
  function handlePagesChange(event) {
    setPages(event.target.value);
  }

  // Handle input change for rating
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  // Handle input change for year
  function handleYearChange(event) {
    setYear(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "") {
      setBooks((b) => [...b, { title, author, genre, language, edition, pages, rating, year }]);
      setTitle("");
      setAuthor(""); // Clear the input fields (after setting books)
      setGenre(""); // Clear the input fields
      setLanguage(""); // Clear the input fields
      setEdition(""); // Clear the input fields
      setPages(""); // Clear the input fields
      setRating(""); // Clear the input fields
      setYear(""); // Clear the input fields
    }
  }

  const superInput = (X) => {

  /*
  Field: X selects the handlers, and automatically assings the text inside the text box.
  */
    let inputSignal = X

    let rHandler = () => {
      if (X === "Title") {
        return handleTitleChange
      } else if (X === "Author") {
        return handleAuthorChange
      } else if (X === "Genre") {
        return handleGenreChange
      } else if (X === "Language") {
        return handleLanguageChange
      } else if (X === "Edition") {
        return handleEditionChange
      } else if (X === "Pages") {
        return handlePagesChange
      } else if (X === "Rating") {
        return handleRatingChange
      } else if (X === "Year") {
        return handleYearChange
      }
    }

    let rValue = () => {
      if (X === "Title") {
        return title
      } else if (X === "Author") {
        return author
      } else if (X === "Genre") {
        return genre
      } else if (X === "Language") {
        return language
      } else if (X === "Edition") {
        return edition
      } else if (X === "Pages") {
        return pages
      } else if (X === "Rating") {
        return rating
      } else if (X === "Year") {
        return year
      }
    }

    return (
      <input
        type="text"
        placeholder={`Enter book ${inputSignal}...`}
        value={rValue()}
        onChange={rHandler()}
        className="input-field"
      />
    )
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <div className="input-section">
        {superInput("Title")}
        {superInput("Author")}
        {superInput("Genre")}
        {superInput("Language")}
        {superInput("Edition")}
        {superInput("Pages")}
        {superInput("Rating")}
        {superInput("Year")}
        <button onClick={addBook} className="add-button">
          Add Book
        </button>
      </div>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started!</p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <Book
                key={index}
                title={book.title}
                author={book.author}
                genre={book.genre}
                language={book.language}
                edition={book.edition}
                pages={book.pages}
                rating={book.rating}
                year={book.year}
                onDelete={() => deleteBook(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;