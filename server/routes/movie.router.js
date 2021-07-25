const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// GET route pulls in Movie Details and Genres from database
router.get('/:id', (req, res) => {
  const query = `
  SELECT movies.title, movies.poster, movies.description,
      ARRAY(
      SELECT genres.name FROM genres
      JOIN movies_genres ON genre_id = genres.id
      JOIN movies ON movie_id = movies.id
      WHERE movies.id = $1
      GROUP BY genres.name
      ) AS genres
    FROM movies
    WHERE movies.id=$1;`;
  pool.query(query, [req.params.id])
  .then( result => {
    console.log('results GET', result.rows[0]);
    res.send(result.rows[0]);
  }).catch( error => {
    console.log('ERROR: Getting Movie Details from DB,', error);
    res.sendStatus(500);
  })
})


router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
    INSERT INTO "movies_genres" ("movie_id", "genre_id")
    VALUES($1, (SELECT genres.id FROM movies_genres
      JOIN genres ON movies_genres.genre_id = genres.id
      WHERE genres.name = $2
      GROUP BY genres.id));`;
      // VALUES  ($1, $2);`;
      
      async function poolQuery(){
        for (element of req.body.genres){
          console.log(req.body.genres);
          console.log(element);
          console.log(createdMovieId);
          // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
          pool.query(insertMovieGenreQuery, [createdMovieId, element])
          .then(result => {
            //Now that both are done, send back success!
            // res.sendStatus(201);
          }).catch(err => {
            // catch for second query
            console.log(err);
            res.sendStatus(500)
          })
        }
      };

      poolQuery().then((response)=>{
        res.sendStatus(201)
      }).catch(error => {
        res.sendStatus(505)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;