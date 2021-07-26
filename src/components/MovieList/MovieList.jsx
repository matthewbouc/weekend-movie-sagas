import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import { CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';


// local styling
const useStyles = makeStyles((theme) => ({
    cardPoster: {
        height: 333,
        cursor: "pointer"
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#121212",
        color: "white",
    },
    cardMedia: {
        paddingTop: '10%',
    },
    cardContent: {
        flexGrow: 1,
      },
    heading: {
        paddingBottom: theme.spacing(2),
        color: "#F2D600",
    }
  }));


function MovieList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // GET all movies from database, will be displayed
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movieId) => {
        history.push(`/details/${movieId}`)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography className={classes.heading} variant="h3">Movie List</Typography>
            <Grid container spacing={4}>

            {/* Map through database and display each movie */}
                {movies.map(movie => {
                    return (
                        <Grid item key={movie.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}>
                                <img 
                                src={movie.poster} 
                                alt={movie.title}
                                className={classes.cardPoster}
                                onClick={()=>handleClick(movie.id)}
                                />
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <h3>{movie.title}</h3>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
                
            </Grid>
        </Container>

    );
}

export default MovieList;