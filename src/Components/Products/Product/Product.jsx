import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'

import useStyles from './styles'
const Product = ({product}) => {
  const classes = useStyles()
  const { productName, productImage, productPrice, productReview} = product
  return (
    <Card className={classes.root}>
      <IconButton className={classes.floatRight}>
        <Favorite />
      </IconButton>
      <CardMedia className={classes.media}
        image={productImage}
      />
      <CardContent className= {classes.content}>
        <Typography variant="body1">{ productName }</Typography>     
        <Typography variant="subtitle1">₹{ productPrice }</Typography>  
        <Typography variant="button" className={classes.review}>{ productReview }</Typography>
        <IconButton className={classes.floatRight}>
          <AddShoppingCart />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default Product

