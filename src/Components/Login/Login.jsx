import { Container, FormControl, InputLabel, Typography, OutlinedInput, Button } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const classes = useStyles()
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if(email!== '' && password !== ''){
      localStorage.setItem('accessToken', email)
      setEmail('')
      setPassword('')
      history.push("/")
    }
  }
  
  return (
    <Container className={classes.root}>
      <Typography variant="h4">Login</Typography>
        <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelWidth={41}
            />
        </FormControl>
        <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="password"
              value={password}
              onChange={(e => setPassword(e.target.value))}
              labelWidth={75}
            />
        </FormControl>
        <div className={classes.link}>
          <Typography className={classes.a} component={Link} to="/" variant="body1" color="primary">Forget Password?</Typography>
          <Typography className={classes.a} variant="body1" component={Link} to="/registration">Register Account</Typography>
        </div>
        <Button onClick={(e) => handleClick(e)} className={classes.button} color="primary" variant="contained">Login</Button>
    </Container>
  )
}

export default Login
