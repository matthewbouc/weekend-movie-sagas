import { Card, CardMedia, Container, Typography } from "@material-ui/core";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { movieId } = useParams();

    const movieDetails = useSelector(store => store.movies[movieId-1]);
    console.log('movieDetails reducer:', movieDetails);


    return (
        <Container>
            <Card>
                <h2>{movieDetails.title}</h2>
                <img src={movieDetails.poster} />
            </Card>
            <Typography>{movieDetails.description}</Typography>
        </Container>
      );
}

export default MovieDetails



