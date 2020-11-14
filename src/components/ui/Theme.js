import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0b72b9"
const arcOrange = "#f59900"
const arcWhite = "#fff"
export default createMuiTheme({
    palette: {
        common: {
            arc: `${arcBlue}`,
            orange: `${arcOrange}`,
            blue: `${arcBlue}`,
            white: `${arcWhite}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fotSize: "2.5rem",
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: `${arcBlue}`
        }
    }
})