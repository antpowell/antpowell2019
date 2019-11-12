import React from 'react';

export default class ButtonGroup extends React.Component {
	render() {
		return (
			<div class="cf dib">
				<a class="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b br--left br2 bb bt bl" href="#0">
					General			
				</a>
				<a class="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b ba" href="#0">
					Military
				</a>
				<a class="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b br--right br2 bb bt br" href="#0">
					Developer
				</a>
			</div>
		);
	}
}
