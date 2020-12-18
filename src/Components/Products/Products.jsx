import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import axios from 'axios';
import { products } from './products'

const Products = () => {
  
  const apiProducts = async () => {
    const products =  await axios.get("http://localhost:8080/product")
    console.log(products);
  }

  apiProducts()
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        { products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
            <Product product={product}  />
        </Grid> 
        ))}
      </Grid>
    </div>
  )
}

export default Products
