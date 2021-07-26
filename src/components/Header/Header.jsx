import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Navigation from "./Navigation"
import { makeStyles } from "@material-ui/core";
import TheatersIcon from '@material-ui/icons/Theaters';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#121212",
        color: "#F2D600",
    },
    theaterIcon: {
        paddingRight: "5px",
    }
  }));

  
function Header() {
    const classes = useStyles();
    return(
        <AppBar position="sticky" className={classes.header}>
            <Toolbar>
                <Navigation />
                <TheatersIcon className={classes.theaterIcon}/>
                <Typography>Film Saga</Typography>
                {/* <TheatersIcon className={classes.theaterIcon}/> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header