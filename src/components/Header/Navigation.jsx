import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menuIcon: {
        color: "white",
    }
  }));

export default function SimpleMenu() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleNavigation = (destination) => {
    setAnchorEl(null);
    history.push(destination);
    };

    return (
    <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}>
        <MenuIcon className={classes.menuIcon}/>
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleNavigation}
        >
        <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigation('/addMovie')}>Add Movie</MenuItem>
        </Menu>
    </div>
    );
}