import React from 'react';
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';

function Cardmovie({movie}){

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.poster}/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          </Card.Text>
          <ReactStars
    count={5}
    edit={false}
    size={24}
    value={movie.rate}
    activeColor="#ffd700"
  />,
        </Card.Body>
      </Card>
    );
}
export default Cardmovie;