import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import {
  AppBar, Button, Toolbar, useScrollTrigger,
  useMediaQuery, Tabs, Tab, Menu, MenuItem,
  SwipeableDrawer, IconButton, List, ListItem,
  ListItemText
} from '@material-ui/core/'

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles, useTheme } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import config from "./headerConfig"

const {navItems, menuOptions} = config;



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
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  menuItemSelected: {
    color: theme.palette.common.black
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
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
            {matches ? drawer() : tabs()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment >

  )

  /* Event Handlers*/

  function handleChange(e, newValue) {
    setValue(newValue)
  }

  function handleClick(e){
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  function handleMenuItemClick(e, i){
    setAnchorEl(null);
    setOpenMenu(false)
    setSelectedIndex(i)
  }
  function handleClose(e){
    setAnchorEl(null)
    setOpenMenu(false)
  }


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



  /**drawing functions */
  function tabs(){
    return <React.Fragment>   
      {renderTabs()}
      <Button variant="contained" color="secondary" className={classes.button} >
        Free Estimate
      </Button>
      {renderMenu()}
    </React.Fragment>
  }

  function drawer(){
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/">
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/services">
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/revolution">
            <ListItemText disableTypography>Revolution</ListItemText>
          </ListItem>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/about">
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/contact">
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem divider onClick={() => setOpenDrawer(false)} button component={Link} to="/estimate">
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment >
  }

  function renderTabs(){
    return <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
      {
        navItems.map((item, index)=>{
          return <Tab className={classes.tab} to={`/${item.to}`} component={Link} label={`${item.label}`} key={index}/>
        })
      }
    </Tabs>
  }

  function renderMenu(){
    return <Menu id="simple-menu" anchorEl={anchorEl}
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
  }
}