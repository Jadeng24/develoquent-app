import React from 'react';

import './Footer.scss';
import {
	FaFacebookSquare,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa';
import IconLink, { IconLinkProps } from '../Icon-link/Icon-link';

const Footer = () => {
	const iconSize = 30;
	const iconColor = '#222';
	const socialLinks: IconLinkProps[] = [
		{
			icon: <FaYoutube color={iconColor} size={iconSize} />,
			url: 'https://www.youtube.com/c/Develoquent',
		},
		{
			icon: <FaFacebookSquare color={iconColor} size={iconSize} />,
			url: 'https://www.facebook.com/develoquent',
		},
		{
			icon: <FaInstagram color={iconColor} size={iconSize} />,
			url: 'https://www.instagram.com/dev_eloquent/',
		},
		{
			icon: <FaLinkedinIn color={iconColor} size={iconSize} />,
			url: 'https://www.linkedin.com/company/develoquent/',
		},
	];

	return (
		<div className="Footer">
			<h1>Follow</h1>
			<div className="social-holder">
				{socialLinks.map((link) => {
					return <IconLink icon={link.icon} url={link.url} />;
				})}
			</div>
		</div>
	);
};
export default Footer;
