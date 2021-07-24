import { Card, CardMedia, Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {

    const movieDetails = useSelector(store => store.movieDetails);
    console.log('movieDetails reducer:', movieDetails);


    return (
        <Container>
            <Card>
                <h2>{movieDetails.title}</h2>
                <img src={movieDetails.poster} />
            </Card>
            <Typography>{movieDetails.description}</Typography>
            {movieDetails.genres.map(genre => {
                return <p key={genre}>{genre}</p>
            })}
        </Container>
      );
}

export default MovieDetails



