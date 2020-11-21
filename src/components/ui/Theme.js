import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0b72b9"
const arcOrange = "#f59900"
const arcWhite = "#fff"
const arcGrey = "#868686"
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
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 25,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem"
            }
        },
        MuiInput: {
            root: {
                color: arcGrey,
                fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }

            }
        }
    }
})