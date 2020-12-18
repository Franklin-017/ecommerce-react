import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  card: {
    padding: 15,
  },
  heading: {
    padding: 15,
    color: '#9F9F9F',
    fontWeight: 500
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  button: {
    marginTop: 20,
    marginLeft: '75%',
    padding: theme.spacing(2)
  }
}))