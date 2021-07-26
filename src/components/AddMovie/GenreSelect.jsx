import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  genreButton: {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    // Button styling
    // backgroundColor: '#0040cc',
    // '&:hover': {
    //     backgroundColor: '#0062cc',
    //     borderColor: '#0062cc',
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
}));

function GenreSelect({genreArray, setGenreArray}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const genres = useSelector(store => store.genres)
    
    // When checkbox status changes, update key to true/false
    const handleChange = (event) => {
      setGenreArray({ ...genreArray, [event.target.name]: event.target.checked });
      console.log('genreArray is', genreArray);
    };

    // Dialog open/close states
    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

    return (
    <div>
        {/* Dialog opens to checkbox options of genres, which can be selected and added to details object */}
        <Button className={classes.genreButton} color="primary" variant="contained" onClick={handleClickOpen}>Add Genres</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select All Genres</DialogTitle>
        <DialogContent>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
            {/* Map through genres, if genre has been checked, add to object and show true, else default false
            This allows the checkboxes to still show checked on dialog close and reopen*/}
        {genres.map(genre=>{
            return (
                <FormControlLabel
                    key={genre.id}
                    control={<Checkbox checked={genreArray[genre.name] || false} onChange={handleChange} name={genre.name} />}
                    label={genre.name}
                />
            )
            })}
            </FormGroup>
            </FormControl>
            
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
            Ok
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default GenreSelect