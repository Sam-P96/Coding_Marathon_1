function Book({ title, author, genre, language, edition, pages, rating, year, onDelete }) {
  return (
    <li className="book-item">
      <div className="book-info">
        <span className="book-title">{title}</span>
        <span className="book-author">by {author}</span>
        <span className="book-author">Genre: {genre}</span>
        <span className="book-author">Language: {language}</span>
        <span className="book-author">Edition: {edition}</span>
        <span className="book-author">Pages: {pages}</span>
        <span className="book-author">Rating: {rating}</span>
        <span className="book-author">Publication: {year}</span>
      </div>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Book;