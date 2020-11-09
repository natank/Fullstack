import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {
  SwipeableDrawer, IconButton, List, ListItem,
  ListItemText
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu';
import { navItems } from './headerConfig'
import { useStyles } from './headerStyles';

export default function Drawer(props) {

  var {value, setValue} = props;
  
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()
  
  return <React.Fragment>
    <SwipeableDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {
          navItems.map((item, index) => {
            return <ListItem divider button
              key={index}
              onClick={() => {setOpenDrawer(false); setValue(index)}}
              component={Link}
              to={`/${item.to}`}
              selected = {value === index}
              >
              <ListItemText 
                className={value===index ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} 
                disableTypography
              >
                  {item.mobileLabel || item.label}
              </ListItemText>
            </ListItem>
          })
        }
        <ListItem 
          className={classes.drawerItemEstimate} 
          divider 
          onClick={() => setOpenDrawer(false)} 
          button 
          component={Link} 
          to="/estimate">
          <ListItemText 
            className={value===6 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography
          >
            Free Estimate</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
    <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
      <MenuIcon className={classes.drawerIcon} />
    </IconButton>
  </React.Fragment >
}
