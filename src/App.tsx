import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.scss';

const App = () => (
	<div className="App">
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</div>
);

export default hot(module)(App);
