import React from 'react'
import {Link} from 'react-router-dom'
import {useStyles} from './footerStyles'
import footerAdornment from '../../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid'

export default function Footer(){
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing = {2}>
                        <Grid item component={Link} to="/" className={classes.link}>Home</Grid>
                    </Grid>
                </Grid>
                <Grid item  className={classes.gridItem}>
                    <Grid container direction="column" spacing = {2}>
                        <Grid item component={Link} to="/services" className={classes.link}>Services</Grid>
                        <Grid item component={Link} to="/services" className={classes.link}>Custom Software Development</Grid>
                        <Grid item component={Link} to="/services" className={classes.link}>Mobile App Development</Grid>
                        <Grid item component={Link} to="/services" className={classes.link}>Website Development</Grid>
                    </Grid>
                </Grid>
                <Grid item  className={classes.gridItem}>
                    <Grid container direction="column" spacing = {2}>
                        <Grid item component={Link} to="/revolution" className={classes.link}>The Revolution</Grid>
                        <Grid item component={Link} to="/revolution" className={classes.link}>Vision</Grid>
                        <Grid item component={Link} to="/revolution" className={classes.link}>Technology</Grid>
                        <Grid item component={Link} to="/revolution" className={classes.link}>Process</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing = {2}>
                        <Grid item component={Link} to="/about" className={classes.link}>About Us</Grid>
                        <Grid item component={Link} to="/about" className={classes.link}>History</Grid>
                        <Grid item component={Link} to="/about" className={classes.link}>Team</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing = {2}>
                        <Grid item component={Link} to="/contact" className={classes.link}>Contact Us</Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}/>
        </footer>
    )
}