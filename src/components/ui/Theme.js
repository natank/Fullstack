import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#OB72B9"
const arcOrange = "#ffba60"

export default createMuiTheme({
    pallete: {
        common: {
            arc: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    Typography: {
        h3: {
            fontWeight: 300
        }
    }
})