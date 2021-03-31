import { React } from "react";

import { CartItemContainer, ItemDetailsContainer, CartItemImage, NameContainer } from "./cart-item.styles";

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;
