import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardItem: {
    display: 'flex'
  },
  image: {
    height: 150
  },
  itemDetails: {
    padding: theme.spacing(3)
  },
  cardController: {
    direction: 'flex-end',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 250
  },
  link: {
    cursor: 'pointer',
    fontSize: "1.3rem",
    fontWidth: 700,
    transition: '.3s ease',
    '&:hover': {
      color: 'red'
    }
  },
  buttonLink: {
    cursor: 'pointer',
    fontWeight: 700,
    '&:hover': {
      color: 'blue',
    }
  },
  circle: {
    border: '1px solid grey',
    width: 20,
    height: 20,
    borderRadius: '50%',
    textAlign: 'center'
  },
  rectangle: {
    width: 40,
    height: 20,
    border: '1px solid grey',
    textAlign: 'center'
  },
}))