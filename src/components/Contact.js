import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { 
  useMediaQuery, 
  Grid, 
  Typography, 
  Button, 
  TextField,
  Dialog, 
  DialogContent 
} from '@material-ui/core'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import ButtonArrow from './ui/ButtonArrow'




const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`
    }
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5, [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  [theme.breakpoints.down("sm")]: {
    height: 40,
    width: 225
  }

}))





export default function Contact(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState("")
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState("")
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

        if (!valid) {
          setEmailHelper("Invalid email")
        } else {
          setEmailHelper("")
        }
        break;
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
        if (!valid) {
          setPhoneHelper("Invalid pone")
        } else {
          setPhoneHelper("")
        }
      default:
        break;
    }
  }


  return (
    <Grid container direction="row">

      <Grid item
        container
        direction="column"
        justify="center"
        lg={4} xl={3}
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0
        }}>
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}>Contact Us</Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: theme.palette.common.blue }}>We re waiting.</Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                  <a href="tel:5555555555">(555) 555-5555</a></Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img src={emailIcon} alt="envelope" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                  <a href="mailto:natan.kamusher@gmail.com">natan.kamusher@gmail.com</a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction="column" style={{ maxWidth: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  fullWidth
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange} />
              </Grid>
            </Grid>

            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                fullWidth
                value={message}
                id="message"
                multiline
                rows={10}
                className={classes.message}
                onChange={event => setMessage(event.target.value)} />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                // disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                variant="contained"
                className={classes.sendButton}
                onClick = {()=>setOpen(true)}
                >
                Send Message <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog 
        style={{zIndex: 1302 }}
        open={open} onChange={()=>setOpen(false)} 
        fullScreen={matchesXS}
        PaperProps={{style: {
          padding:matchesXS ? "1em 0em" : matchesSM ? "5em 5em": matchesMD ? "5em 10em": "5em 20em",
          boxSizing: "content-box"
          }}}>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">Confirm message</Typography>
            </Grid>
            
            
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                fullWidth
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)} />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange} />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange} />
            </Grid>

            
            
            
            <Grid item style={{ maxWidth: matchesXS ? "100%": "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                fullWidth
                value={message}
                id="message"
                multiline
                rows={10}
                className={classes.message}
                onChange={event => setMessage(event.target.value)} />
            </Grid>       
            <Grid 
              item 
              container 
              direction={matchesSM ? "column": "row"}
              style={{marginTop: "2em"}} 
              alignItems="center">
              <Grid item>
                <Button color="primary" onClick={()=>setOpen(false)}>Cancel</Button>  
              </Grid>
              <Grid item>
                <Button style={{fontWeight: 300}}
                  variant="contained"
                  className={classes.sendButton}
                  onClick = {()=>setOpen(true)}
                  >
                  Send Message <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
                </Button>
              </Grid>
            </Grid>     
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid item container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8} xl={9}
        style={{ marginTop: "-.5em" }}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
      >
        <Grid item style={{
          marginLeft: matchesMD ? 0 : "3em",
          textAlign: matchesMD ? "center" : "inherit"
        }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2">Simple Software. <br /> Revolutionary Results.</Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2" style={{ fontSize: "1.5rem" }}>Take advantage of the 21st Century</Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button component={Link} to="/revolution" onClick={() => props.setValue(4)} variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button varian="contained" className={classes.estimateButton}>Free Estimate</Button>
        </Grid>

      </Grid>
    </Grid>
  )
}