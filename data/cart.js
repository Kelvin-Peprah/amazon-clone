export const cart = [];

export function addToCart(productId) {
  // make the select list interactive
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const itemSelector = Number(quantitySelector.value);

  /* don't forget to add the display message

    const displayAddMessage = document.querySelector('.js-added-to-cart');
    displayAddMessage.classList.add('added-to-cart');
    console.log(displayAddMessage)
  */

  // determine if there are matching items in the cart
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  //if there are matching items in the cart, add to  cart
  if (matchingItem) {
    matchingItem.quantity ++;
  } else {                    //else add item to cart
    cart.push({
      productId,
      quantity: itemSelector
    });
  }
}