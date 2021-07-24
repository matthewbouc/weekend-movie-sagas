import { Card, CardMedia, Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const dispatch = useDispatch();
    const {movieId} = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    console.log('movieDetails reducer:', movieDetails);

    useEffect(()=>{
        getMovieDetails();
    }, [])

    const getMovieDetails = () => {
        dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: movieId
        });
    }

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



