import { Box, Button, Card, CardContent, CardMedia, Container, Grid, GridListTileBar, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    description: {
        color: "white",

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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(8),

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

    const getMovieDetails = () => {
        dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: movieId
        });
    }

    return (
        <Container className={classes.container}>
            <Grid>
            <Card className={classes.card}>
                <CardContent>
                <h2>{movieDetails.title}</h2>
                </CardContent>
                <CardMedia >
                <img src={movieDetails.poster} className={classes.poster} />
                </CardMedia>
            </Card>
            <Box>
            <Typography className={classes.description}>{movieDetails.description}</Typography>
            {movieDetails.genres.map(genre => {
                return <p key={genre}>{genre}</p>
            })}
            </Box>
            <Button variant="contained" color="primary" onClick={()=>history.push(`/details/edit/${movieId}`)}>
                Edit Movie
            </Button>
            </Grid>
        </Container>
      );
}

export default MovieDetails



