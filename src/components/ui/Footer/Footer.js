import React from 'react'
import {useStyles} from './footerStyles'
import footerAdornment from '../../../assets/Footer Adornment.svg'
export default function Footer(){
    const classes = useStyles();
    return <footer className={classes.footer}><img alt="black decorative slash" src={footerAdornment} className={classes.adornment} /></footer>
}