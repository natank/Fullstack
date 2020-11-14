import React, { useEffect, useState } from 'react'
import {
  AppBar, Button, Toolbar, useScrollTrigger,
  useMediaQuery

} from '@material-ui/core/'

import { useStyles } from './headerStyles';
import HeaderTabs from './HeaderTabs'
import Drawer from './Drawer'

import { useTheme } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import { pathNameToTab } from './headerConfig'

export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const { value, setValue, selectedIndex, setSelectedIndex } = props.props;

  useEffect(
    () => pathNameToTab(value, setValue, setSelectedIndex),
    [value])


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button component={Link}
              to="/" className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}>
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>

            {matches ? <Drawer {...{ value, setValue }} /> : <HeaderTabs {...{ value, setValue, selectedIndex, setSelectedIndex }} />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment >

  )

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
}