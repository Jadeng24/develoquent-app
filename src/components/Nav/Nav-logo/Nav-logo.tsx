import React from 'react';
import { Link } from 'react-router-dom';

import DeLogo from './../../../assets/DELogo.png';
import DeText from './../../../assets/develoquentText.png';
import './Nav-logo.scss';

const NavLogo = () => (
	<div className="Nav-logo">
		<Link to="/" className="logo-holder">
			<img src={DeLogo} className="logo" alt="develoquent logo" />
			<img src={DeText} className="logo-text" alt="develoquent logo" />
		</Link>
	</div>
);
export default NavLogo;
