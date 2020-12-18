import { Divider, IconButton, Typography } from '@material-ui/core'
import { RemoveCircleOutline, AddCircleOutline } from '@material-ui/icons';
import useStyles from './styles'

const CartItem = ({ item }) => {
  const classes = useStyles()
  const { productName, productPrice, image, quantity } = item

  return (
    <>
      <div className={classes.cardItem}>
        <img className={classes.image} src={image} alt={ productName }/>
        <div className={classes.itemDetails}>
          <Typography variant='h6'>{ productName }</Typography>
          <Typography variant='h6'>₹{ productPrice }</Typography>
        </div>
      </div>
      <div className={classes.cardController}>
        <IconButton onClick="">
          <RemoveCircleOutline />
        </IconButton>
        <p className={classes.rectangle}>{ quantity }</p>
        <IconButton onClick="">
          <AddCircleOutline />
        </IconButton>
        <p className={classes.link} onClick="">Remove</p>
      </div>
      <Divider />
    </>
  )
}

export default CartItem
