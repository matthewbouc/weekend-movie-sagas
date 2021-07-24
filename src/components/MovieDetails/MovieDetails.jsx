import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const dispatch = useDispatch();
    const { movieId } = useParams();

    useEffect(()=>{
        getMovieDetails();
    })

    const getMovieDetails = () => {
        dispatch({
            type: 'GET_MOVIE_DETAILS',
        })
    }

    return (
        <div>
        </div>
      );
}

export default MovieDetails



