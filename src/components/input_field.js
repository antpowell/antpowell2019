import React, { Component } from 'react';
import './input_field.css';

export default class InputField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: 'Input',
		};
	}
	render() {
		return <input placeholder={this.props.placeholder} />;
	}
}
