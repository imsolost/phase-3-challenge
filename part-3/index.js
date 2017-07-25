let cart = []
const modal = document.querySelector('.modal')
const itemslist = document.querySelector('.items-list')

addToCart = (event) => {
  const item = event.target.parentNode.innerText.split('\n')
  cart.push({ item: item[0], price: Number( item[1].slice(1) ) })

  itemslist.appendChild( document.createElement('div') ).className = "cart-row flex flex-row-between"
  const cartrows = document.querySelectorAll('.cart-row')
  const lastrow = cartrows[cartrows.length -1]

  lastrow.appendChild( document.createElement('p') ).innerText = item[0]
  lastrow.appendChild( document.createElement('p') ).innerText = item[1]

  cartCount()
}

sumPrice = (array) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total = total + array[i].price
  }
  return total.toFixed(2)
}

cartCount = () => {
  document.querySelector('.cart-item-count').innerText = `(${cart.length})`

  document.querySelector('.cart-total').innerText = 'Total: $' + sumPrice(cart)
}

clearCart = () => {
  while (itemslist.firstChild) {
    itemslist.removeChild(itemslist.firstChild)
  }
  cart = []
  cartCount()
}

toggleCart = () => {
  if (modal.style.display === 'block') {
    modal.style.display = 'none'
  }
  else modal.style.display = 'block'
}

document.querySelectorAll('.add-to-cart').forEach( element => element.addEventListener('click', addToCart) )
document.querySelectorAll('.cart-button').forEach( element => element.addEventListener('click', toggleCart) )
document.querySelector('.clear-cart').addEventListener('click', clearCart)
