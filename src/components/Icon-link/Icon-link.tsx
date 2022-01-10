import React, { ReactElement } from 'react';

import './Icon-link.scss';

export interface IconLinkProps {
	icon: ReactElement;
	url: string;
}

const IconLink = (props: IconLinkProps) => {
	const { icon, url } = props;

	return (
		<div className="Icon-link">
			<a href={url} target="_blank " rel="noopener noreferrer">
				{icon}
			</a>
		</div>
	);
};
export default IconLink;
