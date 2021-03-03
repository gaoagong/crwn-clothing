export const addItemToCart = (cartItems, cartItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id == cartItemAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id == cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}