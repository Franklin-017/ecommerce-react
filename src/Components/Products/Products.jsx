import { Grid } from '@material-ui/core'
import useStyles from './styles'
import axios from 'axios';
import { useState, useEffect } from 'react'
import Product from './Product/Product'

const Products = () => {

  const [products, setProducts] = useState([]);
  
  const getProductData = async () => {
    const products = await (await axios.get("http://localhost:8080/product")).data
    setProducts(products)
    console.log(products)
  }
  
  useEffect(() => {
    getProductData();
  }, [])
  
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
