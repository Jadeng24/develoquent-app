import React from 'react';
// import introVideo from './../../assets/develoquentIntro.mp4';
import mountainTrees from './../../assets/mountainTrees.jpg';
import mountaintops from './../../assets/mountaintops.jpg';
import mountainStars from './../../assets/mountainStars.jpg';
import laptopCode1 from './../../assets/laptopCode1.jpg';

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
					imgSrc={mountainTrees}
					imgHeight="700px"
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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum laborum numquam blanditiis harum
					quisquam eius sed odit fugiat iusto fuga praesentium optio,
					eaque rerum! Provident similique accusantium nemo autem.
					Veritatis obcaecati tenetur iure eius earum ut molestias
					architecto voluptate aliquam nihil, eveniet aliquid culpa
					officia aut! Impedit sit sunt quaerat, odit, tenetur error,
					harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
					quia. Quo neque error repudiandae fuga? Ipsa laudantium
					molestias eos sapiente officiis modi at sunt excepturi
					expedita sint? Sed quibusdam recusandae alias error harum
					maxime adipisci amet laborum. Perspicia
				</p>
				<ParallaxImage
					imgSrc={laptopCode1}
					imgHeight="500px"
					opacity={0.5}
				></ParallaxImage>
			</ParallaxProvider>
		</div>
	);
};
export default Home;
