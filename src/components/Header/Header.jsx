import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Navigation from "./Navigation"

function Header() {
    return(
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Navigation />
                <Typography >The Movies Saga!</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header