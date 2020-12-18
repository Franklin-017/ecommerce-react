import { AppBar, Toolbar, IconButton, Badge, ListItem } from "@material-ui/core"
import { ShoppingCart } from '@material-ui/icons'
import useStyle from './styles'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Products from '../Products/Products';
import Registration from '../Registration/Registration';
import Login from '../Login/Login'
import Cart from '../Cart/Cart'

import { cart } from '../Cart/cart'

const Navbar = () => {
  const classes = useStyle()
  const authConfirm = localStorage.getItem("accessToken")


  const handleLogout = () => {
    localStorage.removeItem('accessToken')
  }


  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <ListItem className={classes.brand} component={Link} to="/">
            Shop
          </ListItem>
          <div className={classes.links}>
            { !authConfirm ? 
              <ListItem className={classes.link} component={Link} to="/login">
                Login
              </ListItem> : 
              <ListItem className={classes.link} onClick={handleLogout}>
                  Logout
              </ListItem>
             }
          </div>
          <IconButton className={classes.cartIcon} aria-label="add to cart" color="inherit" component={Link} to='/cart'>
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
    </Router>
  )
}

export default Navbar
