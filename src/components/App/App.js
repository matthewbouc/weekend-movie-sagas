import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import EditMovie from '../EditMovie/EditMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={MovieList} />
        <Switch>
          <Route path="/details/:movieId" children={<MovieDetails />} />
        </Switch>
        <Route path="/details/edit/:movieId" component={EditMovie} />
        <Route path="/addMovie" exact component={AddMovie} />
      </Router>
    </div>
  );
}


export default App;
