import React from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

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
    ...theme.mixins.toolbar
  }
}))


export default function Header(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3">
              Arc Development
          </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>

  )
}