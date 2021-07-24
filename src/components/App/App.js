import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Switch>
          <Route path="/details/:movieId" children={<MovieDetails />} exact/>
        </Switch>

        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
