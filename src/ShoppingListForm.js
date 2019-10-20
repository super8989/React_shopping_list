import React, { Component } from "react";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", qty: "" };
	}

	render() {
		return (
			<form>
				<label>Name: </label>
				<input
					id='name'
					name='name'
					value={this.state.name}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default ShoppingListForm;
