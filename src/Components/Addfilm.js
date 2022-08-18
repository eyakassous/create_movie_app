import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addfilm({addMovie}){
    const [film,setfilm]=useState({
        id:0,
        title:"",
        description:"",
        rate:0,
        poster:"",})
    const handleChange=(e)=>{
    setfilm({...film,id:Math.floor(Math.random()*10000)+1,[e.target.name]:e.target.value})
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        addMovie(film)
        setfilm({
          id:0,
          title:"",
          description:"",
          rate:0,
          poster:"",})
    }
    return(
        <Form style={{width:"50%",margin:"auto"}} onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title of movie</Form.Label>
        <Form.Control type="text" placeholder=" title" onChange={handleChange} name="title" value={film.title}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" onChange={handleChange} name="description" value={film.description}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>rate</Form.Label>
        <Form.Control type="number" placeholder="rate" onChange={handleChange} name="rate" value={film.rate}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Pasimagesword" onChange={handleChange} name="poster " value={film.poster}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}
export default Addfilm;