import React, { Component } from 'react';
import './App.css';
import './animation.css';
import About from '../components/about/about';
import Header from '../components/header/header';
import Projects from '../components/projects/projects';
import Experience from '../components/experience/experience';
import Interest from '../components/interest/interest';
import SplitScreenSlider from '../components/SplitScreenSlider/SplitScreenSlider';

export class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="App">
				<SplitScreenSlider />
				{/* <Header />
			<About />
			<hr class="mw3 bb bw1 b--black-10" />
			<Experience/>		
			<hr class="mw3 bb bw1 b--black-10" />
			<Projects />
			<hr class="mw3 bb bw1 b--black-10" />
			<Interest/> */}
			</div>
		);
	}
}

export default App;
