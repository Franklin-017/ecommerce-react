import { Container, FormControl, InputLabel, Typography, OutlinedInput, Button } from '@material-ui/core'
import useStyles from './styles'
import clsx from 'clsx'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Registration = () => {
  const classes = useStyles()
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    cpassword: ''
  })

  const handleClick = (e) => {
    e.preventDefault()
    if(user.email !== '' && user.username !== '' && user.password !== '' && user.cpassword !== ''){  
      setUser({
        email: '',
        username: '',
        password: '',
        cpassword: ''
      })
      history.push("/login") 
    }
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Register</Typography>
      <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value})}
            labelWidth={41}
          />
        </FormControl>
      <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.username}
            onChange={(e) => setUser({...user,  username: e.target.value})}
            labelWidth={75}
          />
        </FormControl>
      <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            labelWidth={70}
          />
        </FormControl>
      <FormControl fullWidth className={clsx(classes.margin, classes.width)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.cpassword}
            onChange={(e) => setUser({...user, cpassword: e.target.value})}
            labelWidth={133}
          />
        </FormControl>
        <Button className={classes.button} onClick={(e) => handleClick(e) } variant="contained" color="primary">Register</Button>
    </Container>
  )
}

export default Registration
