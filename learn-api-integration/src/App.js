import { useState, useEffect } from "react";

function App() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => setBook(data.results));
  }, []);

  //  console.log(books);
  return (
    <div className="App">
      <p>
        Note: This section deals with fetching API using fetch in react function
        with the help of useEffect() React Hook
      </p>
      <h1>Displaying Api data in UI using Fetch call</h1>

      {books && (
        <>
          {/* loop over the books */}
          {books.map((book, index) => (
            <div key={index}>
              <h2>Name: {book.name}</h2>
              <h3>Author: {book.authors[0]}</h3>
              <h3>Publisher: {book.publisher}</h3>
              <h3>Release Date: {book.released}</h3>
              <h3>ISBN: {book.isbn}</h3>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
