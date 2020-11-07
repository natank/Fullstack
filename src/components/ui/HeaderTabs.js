import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Tabs, Tab, Menu, MenuItem, Button } from '@material-ui/core/'
import { useStyles } from './headerStyles';
import { navItems, menuOptions } from './headerConfig'

export default function HeaderTabs(props) {
  let { value, setValue, selectedIndex, setSelectedIndex } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)


  return <React.Fragment>
    {renderTabs()}
    <Button variant="contained" color="secondary" className={classes.button} >
      Free Estimate
    </Button>
    {renderMenu()}
  </React.Fragment>



  function renderTabs() {
    return <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
      {
        navItems.map((item, index) => {
          return <Tab className={classes.tab}
            onMouseOver={event => item.menuName ? handleClick(event) : () => { }}
            to={`/${item.to}`}
            component={Link}
            label={`${item.label}`} key={index} />
        })
      }
    </Tabs>
  }

  function renderMenu() {
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

    /**drawing functions */
    function handleClose(e) {
      setAnchorEl(null)
      setOpenMenu(false)
    }

    function handleMenuItemClick(e, i) {
      setAnchorEl(null);
      setOpenMenu(false)
      setSelectedIndex(i)
    }

    function handleMenuItemClick(e, i) {
      setAnchorEl(null);
      setOpenMenu(false)
      setSelectedIndex(i)
    }
    function handleChange(e, newValue) {
      setValue(newValue)
    }
  }
  function handleChange(e, newValue) {
    setValue(newValue)
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }


}