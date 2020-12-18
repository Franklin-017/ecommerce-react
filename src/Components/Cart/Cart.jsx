import { Button, Container, Divider, Grid, Paper, Typography } from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import { cart } from './cart'

import useStyles from './styles'

const Cart = () => {
  const classes = useStyles()
  var fixedPrice = 0
  var discountPrice = 0
  cart.forEach((item) => {
    fixedPrice += ( item.productPrice * item.quantity )
    discountPrice += ( item.discountPrice * item.quantity )
  })
  var deliveryCharge = ( fixedPrice > 2000 ? 'Free' : '₹100' )
  const totalPrice = fixedPrice - discountPrice + ( fixedPrice > 2000 ? 100 : 0)

  return (
    <Container>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
          <Paper className={classes.card}>
            <Typography variant='h5'>My Cart</Typography>
            <Divider />
            { cart.map((item) =>  <CartItem item={item} key={item.productId} />)}
            <Button className={classes.button}  variant="contained" color="primary">Place Order</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={5}>
          <Paper className={classes.card}>
            <Typography variant="h5" className={classes.heading}>PRICE DETAILS</Typography>
            <Divider />
            <div className={classes.list}>
              <Typography variant="subtitle1">Price({ cart.length} item)</Typography><span>₹{ fixedPrice }</span>
            </div>
            <div className={classes.list}>
              <Typography variant="subtitle1">Discount</Typography><span>₹{ discountPrice }</span>
            </div>
            <div className={classes.list}>
              <Typography variant="subtitle1">Delivery Charges</Typography><span>{ deliveryCharge }</span>
            </div>
            <Divider />
            <div className={classes.list}>
              <Typography variant="subtitle1">Total</Typography><span>₹{ totalPrice }</span>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart

