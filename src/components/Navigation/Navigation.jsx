import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

export default function SimpleMenu() {
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
        Navigation
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