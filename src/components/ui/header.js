import React, {useState} from 'react'

import { AppBar, Button, Toolbar, useScrollTrigger, Tabs, Tab } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom"

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
    height: "7em"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
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
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} />
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services"/>
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />

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