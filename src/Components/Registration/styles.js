import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90vh',
    width: '40vw'
  },
  button: {
    border: 0,
    borderRadius: 3,
    height: 48,
    width: '100%',
    padding: '10px 30px',
  },
  margin: {
    margin: theme.spacing(1),
  }
}))