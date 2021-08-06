# WEEKEND MOVIE SAGAS

## Description
Weekend Challenge

The goal of this project was to create a movie management application using react and redux-saga.  The app needed to allow users to see all movies in the database, the details of each individual movie, and genres associated with the movie.  Users have the ability to add new movies and edit existing movies.  Movie information is stored in a postgreSQL database.  Styling was improved using material-ui.

## Screen Shot

![Project Screen Shot](https://github.com/matthewbouc/weekend-movie-sagas/blob/master/public/images/MovieSaga.gif)

### Prerequisites


- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `Database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal - will open up a new browser tab.

## Usage

1. All movies in the database are displayed on the home page as a title and poster image.
2. Clicking on a movie will redirect the user to a details page, which includes the title, poster image, movie description, and the selected genres for the movie.
3. Clicking on the Edit button redirects the user to a edit page.  The user can adjust the title, poster, and description.
4. The user can click on the navigation/menu bar to present options to navigate to the home page or the Add Movie page.
5. On the Add Movie page, the user adds in a title, description, and poster url.  The Add Genres button is used to select any genres related to the movie.



## Built With

- HTML/CSS
- Javascript
- Node
- Express
- Axios
- React
- Redux-Saga
- PostgreSQL
- Material UI


## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io)!