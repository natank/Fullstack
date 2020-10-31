import React, { useEffect, useState } from 'react'

import {
  AppBar, Button, Toolbar, useScrollTrigger,
  useMediaQuery, Tabs, Tab, Menu, MenuItem, SwipeableDrawer
} from '@material-ui/core/'

import { MenuIcon } from '@material-ui/icons'

import { makeStyles, useTheme } from '@material-ui/styles'
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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    },

  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
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
      color: 'white',
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
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {

    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      color: 'white',
      backgroundColor: theme.palette.primary.dark
    }
  },
  menuItemSelected: {
    color: theme.palette.common.black
  }
}))


export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)

  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false)
    setSelectedIndex(i)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" }
  ]



  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break
      case "/services":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case "/customsoftware":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case "/mobileapps":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case "/websites":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case "/revolution":
        if (value !== 2) {
          setValue(2)
        }
        break
      case "/about":
        if (value !== 3) {
          setValue(3)
        }
        break
      case "/contact":
        if (value !== 4) {
          setValue(4)
        }
        break
      case "/estimate":
        if (value !== 5) {
          setValue(5)
        }
        break
      default:
        break
    }
  }, [value])
  const tabs = (
    <React.Fragment>
      <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
        <Tab className={classes.tab} to="/" component={Link} label="Home" />
        <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={event => handleClick(event)}
          className={classes.tab} label="Services" component={Link} to="/services" />
        <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
        <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
        <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />

      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button} >
        Free Estimate
            </Button>
      <Menu id="simple-menu" anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={2}
      >
        {menuOptions.map((option, i) => (
          <MenuItem component={Link}
            key={option.name}
            to={option.link}
            classes={{ root: classes.menuItem, selected: classes.menuItemSelected }}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              setValue(1);
              handleClose()
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={() => setOpenDrawer(false)}
        onOpen={toggleDrawer(anchor, true)}
      >

      </SwipeableDrawer>
    </React.Fragment >
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link}
              to="/" className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}>
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment >

  )
}