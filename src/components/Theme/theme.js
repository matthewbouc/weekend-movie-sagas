import { createMuiTheme } from "@material-ui/core";

// Color theme for App
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#FFF',
        },
        tertiary: {
            main: '#F5C518',
        },
        quaternary: {
            main: '#121212',
        },
    },
    // status: {
    //     danger: "orange"
    // },
    // spacing: 8,
})

export default theme;