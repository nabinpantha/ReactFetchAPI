import {useState , useEffect} from 'react'

function RandomUser() {
    const [books, setBook] = useState([]);

    useEffect(() => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => setBook(data.results));
    }, []);
  console.log(books)


    return (
        <div>
            
<h1>hello</h1>
{books && (
        <>
          {/* loop over the books */}
          {books.map((book, index) => (
            <div key={index}>
                <img src= {book.picture.large} alt ="" ></img>
              <h2>First Name: {book.name.first}</h2>
              <h2>City: {book.location.city}</h2>
              <h2>Country: {book.location.country}</h2>
              <h2>Age: {book.dob.age}</h2>


            </div>
          ))}
        </>
      )}
        </div>
    )
}

export default RandomUser
