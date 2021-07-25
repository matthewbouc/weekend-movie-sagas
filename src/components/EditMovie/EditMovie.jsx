import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import GenreSelect from "../AddMovie/GenreSelect";

function EditMovie() {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.movieDetails);
    const [movieTitle, setMovieTitle] = useState(movieDetails.title);
    const [movieDescription, setMovieDescription] = useState(movieDetails.description);
    const [movieUrl, setMovieUrl] = useState(movieDetails.poster);
    // const [genreArray, setGenreArray] = useState([]);

    useEffect(()=>{
        getMovieDetails();
    }, [])

    const getMovieDetails = () => {
        dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: movieId
        });
        // dispatch({
        //     type: 'GET_GENRES'
        // });
        // for (const genre of movieDetails.genres){
        //     setGenreArray({ ...genreArray, [genre]: true });
        // }
    }

    const handleSubmit = () => {
        // let genresSelected = []
        // for (const key in genreArray){
        //     if (genreArray[key] == true){
        //         genresSelected.push(key)
        //     }
        // }
        dispatch({
            type: 'EDIT_MOVIE',
            payload: {
                id: movieId,
                title: movieTitle,
                poster: movieUrl,
                description: movieDescription,
                // genres: genresSelected
            }
        })
        setMovieTitle('');
        setMovieDescription('');
        setMovieUrl('');
        // setGenreArray([]);
    }




    return(
        <form>
        <TextField value={movieTitle} onChange={(event) => setMovieTitle(event.target.value)} variant="filled" label="Movie Title"/>
        <TextField value={movieDescription} onChange={(event) => setMovieDescription(event.target.value)} variant="filled" label="Movie Description"/>
        <TextField value={movieUrl} onChange={(event) => setMovieUrl(event.target.value)} variant="filled" label="Movie URL"/>
        {/* <GenreSelect genreArray={genreArray} setGenreArray={setGenreArray}/> */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>Edit Movie</Button>
    </form>
    )
}

export default EditMovie