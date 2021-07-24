import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movieId) => {
        history.push(`/details/${movieId}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid container>
                {movies.map(movie => {
                    return (
                        <Card key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img 
                            src={movie.poster} 
                            alt={movie.title}
                            className="moviePoster"
                            onClick={()=>handleClick(movie.id)}
                            />
                        </Card>
                    );
                })}
            </Grid>
            </section>
        </main>

    );
}

export default MovieList;