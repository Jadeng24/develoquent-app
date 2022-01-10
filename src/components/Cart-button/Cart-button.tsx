import React, { useState } from 'react';

import './Cart-button.scss';
import { MdOutlineShoppingCart } from 'react-icons/md';

const CartButton = (props) => {
	const { openCart } = props;
	return (
		<div className="Cart-button">
			<MdOutlineShoppingCart onClick={() => !openCart} /> (0)
		</div>
	);
};
export default CartButton;
