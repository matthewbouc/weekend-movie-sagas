import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GenreSelect from "./CategorySelect";


function AddMovie() {
    const dispatch = useDispatch();

    const [movieTitle, setMovieTitle] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [genreArray, setGenreArray] = useState([]);

    useEffect(()=>{
        dispatch({
            type: 'GET_GENRES'
        })
    })

    const handleSubmit = () => {
        let genresSelected = []
        for (const key in genreArray){
            if (genreArray[key] == true){
                genresSelected.push(key)
            }
        }
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: {
                title: movieTitle,
                poster: movieUrl,
                description: movieDescription,
                genre: genresSelected
            }
        })
        // console.log(genresSelected);
        

    }

    return(
        <form>
            <TextField value={movieTitle} onChange={(event) => setMovieTitle(event.target.value)} variant="filled" label="Movie Title"/>
            <TextField value={movieDescription} onChange={(event) => setMovieDescription(event.target.value)} variant="filled" label="Movie Description"/>
            <TextField value={movieUrl} onChange={(event) => setMovieUrl(event.target.value)} variant="filled" label="Movie URL"/>
            <GenreSelect genreArray={genreArray} setGenreArray={setGenreArray}/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Add Movie</Button>

        </form>
    )
}

export default AddMovie