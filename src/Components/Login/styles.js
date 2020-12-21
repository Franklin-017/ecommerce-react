import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    height: '90vh',
    flexDirection: "column"
  },  
  button: {
    border: 0,
    borderRadius: 3,
    height: 48,
    width: '100%',
    padding: '10px 30px'
  },
  margin: {
    margin: theme.spacing(1),
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  a: {
    textDecoration: 'none',
    color: '#3F51B5',
  }
}))