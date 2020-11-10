import { makeStyles, useTheme } from '@material-ui/styles'

export const useStyles = makeStyles(theme => ({
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
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem:{
    ...theme.typography.tab,
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  drawerItemSelected:{
    "& .MuiListItemText-root":{
      opacity: 1
    }
  },
  drawerItemEstimate: {
    ...theme.typography.tab,
    backgroundColor:theme.palette.common.orange
  },
  appbar: {
    zIndex: theme.zIndex.modal+1
  }
}))

