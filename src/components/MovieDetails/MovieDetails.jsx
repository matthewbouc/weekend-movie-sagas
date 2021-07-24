import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const dispatch = useDispatch();
    const { movieId } = useParams();

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
        <div>
        <p>{movieDetails.title}, {movieDetails.description}</p>
        </div>
      );
}

export default MovieDetails



