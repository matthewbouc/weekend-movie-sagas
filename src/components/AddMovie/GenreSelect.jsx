import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import { FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
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
}));

function GenreSelect({genreArray, setGenreArray}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const genres = useSelector(store => store.genres)
    
      const handleChange = (event) => {
        setGenreArray({ ...genreArray, [event.target.name]: event.target.checked });
        console.log('genreArray is', genreArray);
      };

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return (
    <div>
        <Button color="secondary" variant="contained" onClick={handleClickOpen}>Open select dialog</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
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