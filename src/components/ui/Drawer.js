import React, { useState } from 'react'
import {
  SwipeableDrawer, IconButton, List, ListItem,
  ListItemText, Link
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu';
import { navItems } from './headerConfig'
import { useStyles } from './headerStyles';

export default function Drawer() {
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
              onClick={() => setOpenDrawer(false)}
              component={Link}
              to={`/${item.to}`}>
              <ListItemText classes={{root: classes.drawerItem}} disableTypography>{item.mobileLabel || item.label}</ListItemText>
            </ListItem>
          })
        }
        <ListItem className={classes.drawerItemEstimate} divider onClick={() => setOpenDrawer(false)} button component={Link} to="/estimate">
          <ListItemText className = {classes.drawerItem} disableTypography>Free Estimate</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
    <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
      <MenuIcon className={classes.drawerIcon} />
    </IconButton>
  </React.Fragment >
}
