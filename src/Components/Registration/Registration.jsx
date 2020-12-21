import { Container, FormControl, InputLabel, Typography, OutlinedInput, Button } from '@material-ui/core'
import useStyles from './styles'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Registration = () => {
  const classes = useStyles()
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    cpassword: ''
  })

  const handleSubmit = async  (e) => {
    e.preventDefault()
    if(user.email !== '' && user.username !== '' && user.password !== '' && user.cpassword !== ''){ 

      axios.post("http://localhost:8080/user", {
        email: user.email,
        userName: user.username,
        password: user.password
      })
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl fullWidth className={ classes.margin } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value})}
            labelWidth={41}
          />
        </FormControl>

        <FormControl fullWidth className={ classes.margin } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={user.username}
            onChange={(e) => setUser({...user,  username: e.target.value})}
            labelWidth={75}
          />
        </FormControl>

        <FormControl fullWidth className={ classes.margin } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            labelWidth={70}
          />
        </FormControl>

        <FormControl fullWidth className={ classes.margin } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="password"
            value={user.cpassword}
            onChange={(e) => setUser({...user, cpassword: e.target.value})}
            labelWidth={133}
          />
        </FormControl>

        <Button type="submit" className={classes.button} variant="contained" color="primary">Register</Button>

        </form>
    </Container>
  )
}

export default Registration
