import "../styles/addBooks.css";
import {useState} from "react"
import {useNavigate } from "react-router-dom";

const AddBooks = () => {
  let [tittle,settittle]=useState('')
  let [author, setauthor]=useState('')
  let [language, setlanguage]=useState('')
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault()
    let data={
      tittle:tittle,
      author:author,
      language:language,
    }
    fetch("http://localhost:5000/Books",{
      method: "POST",
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify(data)
    });
    alert("Added to BooksList")
    navigate("/admin-portal/books-list")

  }
  return (
    <section className="adsect">
    <div className="container">
      <div className="row">
        <h1>Add Books</h1>
      </div>
        <div className="allin">
        <form action="tittlee" onSubmit={handleSubmit}>
          <label htmlFor="tittle">Tittle<br />
          <input type="text" placeholder="Enter Tittle" value={tittle} onChange={(e)=>settittle(e.target.value)}/> </label> <br />
          <label htmlFor="author">Author Name <br />
          <input type="text" placeholder="Enter Author Name" value={author} onChange={(e)=>setauthor(e.target.value)}  /> </label><br />
          <label htmlFor="language">Language<br />
          <input type="text" placeholder="Enter Language" value={language} onChange={(e)=>setlanguage(e.target.value)}  /></label>  <br />
          <div className="adbk">
            <button className="addbk" onClick="">Add Book</button>
            <button className="rest"> Reset</button>
          </div>
      </form>
      </div>    
    </div>
    </section>
  );
};

export default AddBooks;
