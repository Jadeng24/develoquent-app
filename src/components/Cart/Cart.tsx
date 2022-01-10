import React, { useEffect, useState } from 'react';
import CartButton from '../Cart-button/Cart-button';

import './Cart.scss';

const Cart = () => {
	const [isCartOpen, setCartToggle] = useState(false);
	const toggle = () => setCartToggle(!isCartOpen);

	useEffect(() => {
		setCartToggle(isCartOpen);
	}, [isCartOpen]);
	return (
		<div className={`Cart ${isCartOpen ? 'cart-open' : 'cart-closed'}`}>
			<CartButton isOpen={isCartOpen} />
			<div>Heres the actual cart</div>
		</div>
	);
};
export default Cart;
