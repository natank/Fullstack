import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Hidden } from '@material-ui/core'
import { useStyles } from './footerStyles'
import footerAdornment from '../../../assets/Footer Adornment.svg'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'


export default function Footer(props) {
    const classes = useStyles();
    const { value, setValue, selectedIndex, setSelectedIndex } = props.props;
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => setValue(0)} to="/" className={classes.link}>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link}
                                onClick={() => { setValue(1); setSelectedIndex(0) }}
                                to="/services" className={classes.link}>
                                Services1
                        </Grid>
                            <Grid item component={Link}
                                onClick={() => { setValue(1); setSelectedIndex(1) }}
                                to="/services" className={classes.link}>
                                Custom
                         Software Development</Grid>
                            <Grid item component={Link}
                                onClick={() => { setValue(1); setSelectedIndex(2) }}
                                to="/services" className={classes.link}>
                                Mobile
                         App Development</Grid>
                            <Grid item component={Link}
                                onClick={() => { setValue(1); setSelectedIndex(3) }}
                                to="/services" className={classes.link}>
                                Website
                         Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link}
                                onClick={() => setValue(2)}
                                to="/revolution"
                                className={classes.link}>The Revolution
                            </Grid>
                            <Grid item component={Link}
                                onClick={() => setValue(2)}
                                to="/revolution"
                                className={classes.link}>Vision
                            </Grid>
                            <Grid item component={Link}
                                onClick={() => setValue(2)}
                                to="/revolution"
                                className={classes.link}>Process
                            </Grid>
                            <Grid item component={Link}
                                onClick={() => setValue(2)}
                                to="/revolution"
                                className={classes.link}>Technology
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>About Us</Grid>
                            <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>History</Grid>
                            <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => setValue(4)} to="/contact" className={classes.link}>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" className={classes.icon} src={facebook} />
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" className={classes.icon} src={twitter} />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" className={classes.icon} src={instagram} />
                </Grid>
            </Grid>
        </footer>
    )
}