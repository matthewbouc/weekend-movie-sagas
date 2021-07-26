import {  Button, Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    description: {
        width: 1000,
        color: "white",
        paddingTop: 10,
    },
    card: {
        height: '100%',
        width: 350,
        backgroundColor: '#121212',
        color: '#F2D600',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        flexGrow: 1,
    },
    container: {
        marginBottom: theme.spacing(8),
        justifyContent: 'center',
    },
    genres: {
        color: '#F2D600',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
    },
    poster: {
        height: 500,
    }
}))


function MovieDetails() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {movieId} = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    console.log('movieDetails reducer:', movieDetails);

    useEffect(()=>{
        getMovieDetails();
    }, [])

    // useParams() to GET movie details
    const getMovieDetails = () => {
        dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: movieId
        });
    }

    return (
        <Container>
            <Grid container className={classes.container} >
            <Card className={classes.card}>
                <CardContent>
                <h2>{movieDetails.title}</h2>
                </CardContent>
                <CardMedia >
                <img src={movieDetails.poster} className={classes.poster} />
                </CardMedia>
            </Card>
            <Typography className={classes.description}>{movieDetails.description}</Typography>
            <Grid container className={classes.genres}>

            {/* Map through genre array to display all genres */}
            {movieDetails.genres.map(genre => {
                return <Typography key={genre}>{genre}</Typography>
            })}

            </Grid>
            <Button variant="contained" color="primary" onClick={()=>history.push(`/details/edit/${movieId}`)}>
                Edit Movie
            </Button>
            </Grid>
        </Container>
      );
}

export default MovieDetails



