export var cart = [
  {
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/596097/02/fnd/IND/fmt/png/BMW-M-Motorsport-Hooded-Sweat-Jacket',
    productId: '12',
    productName: 'PUMA BMW Motorsport Hoodie',
    productPrice: 3999,
    discountPrice: 700,
    productReview: '4.8',
    quantity: 2,
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51TT8BoCF2L._UX425_.jpg',
    productId: '9',
    productName: 'ADRO Marshmellow Printed Hoodie',
    productPrice: 799,
    discountPrice: 200,
    productReview: '4.1',
    quantity: 1,
  },
  {
    image: 'https://www.dressinn.com/f/13719/137193244/nike-sportswear-club-graphic-hoodie-regular.jpg',
    productId: '11',
    productName: 'Nike Sportswear Club Hoodie',
    productPrice: 2999,
    discountPrice: 500,
    productReview: '4.7',
    quantity: 1
  },
]

export const removeItem = (id) => {
  cart = cart.filter(item => item.id !== id)
}

export const increaseQuantity = (id) => {
  cart = cart.forEach(item => {
    if(item.productId === id) {
      item.quantity++
    }
  })
}

export const decreaseQuantity = (id) => {
  cart = cart.forEach(item => {
    if(item.productId === id) {
      if(item.quantity > 1)
        item.quantity--
      else 
        removeItem(id)
    }
  })
}