import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const dispatch = useDispatch();
    const { movieId } = useParams();

    const movieDetails = useSelector(store => store.movies[movieId-1]);
    console.log('movieDetails reducer:', movieDetails);


    return (
        <div>
        <p>{movieDetails.title}, {movieDetails.description}</p>
        </div>
      );
}

export default MovieDetails



