import React from "react";

import { Button } from '@material-ui/core'
import './PlainCssButton.css';

import { StylesProvider, makeStyles, styled } from '@material-ui/core/styles';



const App = () => {
  return (
    <StylesProvider injectFirst>
      <PlainCSSBtn />
      <HookBtn />
      <StyledComponents />
    </StylesProvider>
  )
}



const PlainCSSBtn = function () {

  return (
    <Button className="button" variant="contained" color="primary">
      Hello Plain
    </Button>
  )
}



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'red'
    }
  }
}
)

function HookBtn() {
  const classes = useStyles();
  return <Button className={classes.root}>Hello Hook</Button>
}


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
})

function StyledComponents() {
  return <MyButton>Styled Components</MyButton>
}
export default App