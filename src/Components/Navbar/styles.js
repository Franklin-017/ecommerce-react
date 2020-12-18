import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  brand: {
    fontSize: '1.5rem',
    fontWeight: 500,
    width: '10%',
    color: "#FFFFFF",
  },
  links: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },
  link: {
    width: '0%',
    marginRight: theme.spacing(5),
    color: "#FFFFFF",
    cursor: 'pointer',
    '&:hover': {
      color: '#E2E2E2',
    }
  },
}))