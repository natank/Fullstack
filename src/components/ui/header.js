import React, { useEffect, useState } from 'react'

import { AppBar, Button, Toolbar, useScrollTrigger, Tabs, Tab } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "8em"
  },
  logoContainer: {
    padding: 0,
    justifyContent: "normal",
    backgroundColor: "transparent"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    '&:hover': {
      color: "#000",
    }
  },
  tabLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "50px"

  },
  button: {
    ...theme.Typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  }
}))


export default function Header(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value)
  }


  useEffect(() => {
    if (window.location.pathname == "/" && value !== 0) {
      setValue(0)
    }
    else if (window.location.pathname == "/services" && value !== 1) {
      setValue(1)
    }
    else if (window.location.pathname == "/revolution" && value !== 2) {
      setValue(2)
    }
    else if (window.location.pathname == "/about" && value !== 3) {
      setValue(3)
    }
    else if (window.location.pathname == "/contact" && value !== 4) {
      setValue(4)
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link}
              to="/" className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}>
              <img alt="company logo" src={logo} />
            </Button>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
              <Tab className={classes.tab} to="/" component={Link} label="Home" />
              <Tab className={classes.tab} label="Services" component={Link} to="/services" />
              <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
              <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
              <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />

            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment >

  )
}