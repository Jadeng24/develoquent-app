import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const ParallaxImage = (props) => {
	const { imgSrc, imgHeight, opacity, children } = props;

	return (
		<ParallaxBanner
			layers={[{ image: imgSrc, amount: opacity || 0.6 }]}
			style={{ height: imgHeight }}
		>
			<div>{children}</div>
		</ParallaxBanner>
	);
};
