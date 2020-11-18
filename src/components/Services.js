import 'React' from 'react';

import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Grid, Typography, Button, useMediaQuery} from '@material-ui/core'



const useStyles = makeStyles(theme=>{

})

export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container direction="column">
            
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em"}}>
                <Grid container direction="row" 
                className={classes.serviceContainer}
                justify={matchesSM ? "center": undefined}
                >
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", 
                    textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                    Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                    </Typography>
                    <Typography variant="subtitle1">
                    Complete digital solutions, from investigation to{" "} <span className={classes.specialText}>celebration.</span>
                    </Typography>
                    <Button component={Link} onClick = {()=>{props.setValue(1); props.setSelectedIndex(1)}} to="/customsoftware" variant="outlined" className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="custom software icon" className={classes.icon} src={customSoftwareIcon} />
                </Grid>
                </Grid>
            </Grid>
                    {/*****iOS/Android Block*****/}
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em"}}>
                <Grid container direction="row" 
                className={classes.serviceContainer}
                justify={matchesSM ? "center": "flex-end"}
                >
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", 
                    textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                    iOS/Android App Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                    Extend Functionality. Extend Access. Increase Engagement.
                    </Typography>
                    <Typography variant="subtitle1">
                    Integrate your web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform
                    </Typography>
                    <Button onClick = {()=>{props.setValue(1); props.setSelectedIndex(2)}} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                    <img alt="mobile phone icon" className={classes.icon} src={mobileAppsIcon} />
                </Grid>
                </Grid>
            </Grid>
            {/*****Websites Block*****/}
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em"}}>
                <Grid container direction="row" 
                className={classes.serviceContainer}
                justify={matchesSM ? "center": undefined}
                >
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", 
                    textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                    Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More, Discover More, Sell More.
                    </Typography>
                    <Typography variant="subtitle1">
                    Optimized for Search Engines, built for speed
                    </Typography>
                    <Button component={Link} to="/websites" onClick = {()=>{props.setValue(1); props.setSelectedIndex(3)}} variant="outlined" className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="custom software icon" className={classes.icon} src={websitesIcon} />
                </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}