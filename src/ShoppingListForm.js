import React, { Component } from "react";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", qty: "" };
	}

	render() {
		return (
			<form>
				<label htmlFor='name'>Name: </label>
				<input
					id='name'
					name='name'
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<label htmlFor='qty'>Quantity: </label>
				<input
					id='qty'
					name='qty'
					value={this.state.qty}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default ShoppingListForm;
