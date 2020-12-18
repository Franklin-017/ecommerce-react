import { makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: 345,
    padding: 10,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  floatRight: {
    float: 'right',
  },
  review : {
    backgroundColor: 'green',
    color: 'white',
    padding: '3px 7px',
    borderRadius: 5,
  }
}))