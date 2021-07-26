import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GenreSelect from "./GenreSelect";


const useStyles = makeStyles((theme) => ({
    textInput: {
        color: "white",
        backgroundClip: "white",
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2D600',
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    addMovieButton: {
        margin: 'auto',
        width: 200,
        marginBottom: 20,
        color: 'white',
        // Button styling
        // backgroundColor: '#0062cc',
        // '&:hover': {
        //     backgroundColor: '#0050cc',
        //     borderColor: '#0058cc',
        //     boxShadow: 'none',
        //   },
        // '&:active': {
        //     boxShadow: 'none',
        //     backgroundColor: '#0062cc',
        //     borderColor: '#005cbf',
        //   },
        // '&:focus': {
        //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        //   },
    }

}))

function AddMovie() {

    const classes = useStyles();
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

    // On submit, create an array of genres to be passed with movie details
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
                genres: genresSelected
            }
        })
        setMovieTitle('');
        setMovieDescription('');
        setMovieUrl('');
        setGenreArray([]);
        // console.log(genresSelected);
        

    }

    return(
        <Container className={classes.container}>
            <TextField value={movieTitle} onChange={(event) => setMovieTitle(event.target.value)} variant="filled" label="Movie Title"/>
            <TextField value={movieDescription} onChange={(event) => setMovieDescription(event.target.value)} variant="filled" label="Movie Description"/>
            <TextField value={movieUrl} onChange={(event) => setMovieUrl(event.target.value)} variant="filled" label="Movie URL"/>
            <GenreSelect genreArray={genreArray} setGenreArray={setGenreArray}/>
            <Button color="primary" variant="contained" className={classes.addMovieButton} onClick={handleSubmit}>Add Movie</Button>

        </Container>
    )
}

export default AddMovie