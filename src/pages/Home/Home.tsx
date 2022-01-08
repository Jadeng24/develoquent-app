import React from 'react';
// import introVideo from './../../assets/develoquentIntro.mp4';
// import mountainTrees from './../../assets/mountainTrees.jpg';
import mountaintops from './../../assets/mountainTops.jpg';
import mountainStars from './../../assets/mountainStars.jpg';
import laptopCode2 from './../../assets/laptopCode2.jpg';

import { ParallaxProvider } from 'react-scroll-parallax';
import './Home.scss';
import { ParallaxImage } from '../../components/Parallax-image/Parallax-image';

const Home = () => {
	return (
		<div className="Home">
			{/* <img src={homeHero} alt="home" /> */}
			{/* <video id="background-video" autoPlay loop muted poster={thumbnail}>
				<source src={introVideo} type="video/mp4" />
			</video> */}

			<ParallaxProvider>
				<ParallaxImage
					imgSrc={laptopCode2}
					imgHeight="850px"
					opacity={0.5}
				></ParallaxImage>
				<div className="side-x-side">
					<ParallaxImage
						imgSrc={mountaintops}
						imgHeight="600px"
						opacity={0.5}
					></ParallaxImage>
					<ParallaxImage
						imgSrc={mountainStars}
						imgHeight="600px"
						opacity={0.5}
					></ParallaxImage>
				</div>
				<section className="featured-products">
					<h2>Featured Products</h2>
					<div className="featured-product">1</div>
					<div className="featured-product">2</div>
					<div className="featured-product">3</div>
				</section>
				<ParallaxImage
					imgSrc={mountainStars}
					imgHeight="500px"
					opacity={0.5}
				></ParallaxImage>
			</ParallaxProvider>
		</div>
	);
};
export default Home;
