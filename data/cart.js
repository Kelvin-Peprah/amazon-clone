export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
  },
];

function saveTocart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  // make the select list interactive
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const itemSelector = Number(quantitySelector.value);

  /* don't forget to add the display message

    const displayAddMessage = document.querySelector('.js-added-to-cart');
    displayAddMessage.classList.add('added-to-cart');
    console.log(displayAddMessage)
  */

  // determine if there are matching items in the cart
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  //if there are matching items in the cart, add to  cart
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    //else add item to cart
    cart.push({
      productId,
      quantity: itemSelector,
    });
  }

  saveTocart();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveTocart();
}
