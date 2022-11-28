import '../styles/booksList.css';
import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

const BooksList = () => {
  let location = useLocation()
  let [books, setBooks] = useState([]);
  useEffect(() => {
    let fetchBooks = async () => {
      let response = await fetch("http://localhost:5000/Books");
      let data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);     //[books]-->to operate for particular books list only.
  // console.log(location.pathname); to get user id from  location 
  
  let handleDelete = ((id) =>{
    fetch(`http://localhost:5000/Books/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(books)
    });
     window.location.reload("Deleted Successfully")  //to get reload itself/default.
     alert("Deleted Successfully");
    setBooks(books.filter((x)=>x.id !== id))
  });

  let handleSubmit = ((id)=>{
    fetch(`https://localhost:5000/Books/${id}`,{
      method: 'POST',
      body: JSON.stringify(books)
    });
    window.location.reload("Deleted Successfully")
    alert("updated books successfully");
    // setBooks(books.filter((x)=>x.id !== id))

  })
  return (
    <section className="bkbkg">
    <div className="bookslist"> 
      <div className="bkrhd"><h1>Books List<br />No.of Books:{books.length}</h1></div>
        <div className="bkcard">  
        {books.map((data) => {
          return (
            <div className="bklist">
              <h1>Tittle:{data.tittle}</h1>
              <h3>Author:{data.author}</h3>
              <h3>Language:{data.language}</h3>
              <h3>Id:{data.id}</h3>
             {location.pathname === '/admin-portal/books-list' &&  <button onClick={()=> handleDelete(data.id)}>Delete</button>}
             {location.pathname === '/user-portal/books-list' &&  <button onClick={()=> handleSubmit(data.id)}>Not Intrested</button>}
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default BooksList;
