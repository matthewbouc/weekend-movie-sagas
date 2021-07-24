import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('GET_GENRES', fetchAllGenres);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
}

function* addNewMovie(action){
    try{
        yield call(axios.post, '/api/movie', action.payload);
        yield put({type: 'FETCH_MOVIES'});
    } catch (error){
        console.log('Error POSTing new movie', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }    
}


function* fetchMovieDetails(action) {
    // GET single movie details from DB
    console.log('id is now: ', action.payload);
    try {
        const movie = yield axios.get(`api/movie/${action.payload}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: movie.data });
    } catch{
        console.log('Error GETting Movie Details');
    }
}

function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }    
}



// ********** REDUCERS ********** //

// Used to store movie details for specific movie
const movieDetails = (state = {genres: []}, action) => {
    if ( action.type === 'SET_MOVIE_DETAILS'){
        return action.payload
    }
    return state
}



// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log('full movie set is', action.payload)
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('all genres', action.payload)
            return action.payload;
        default:
            return state;
    }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
