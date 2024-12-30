import React, { useState } from "react";
function ExpenseTracker() {

	const [expenseList, setExpenseList] = useState([{
		description: 'steak',
		category: 'food',
		amount: '$12.50'
	},
	{
		description: 'bus fare',
		category: 'transport',
		amount: '$3.00'
	}]);
	return (
		<div className="expense-tracker">
			<div className="header">
				<div>Description</div>
				<div>Category</div>
				<div>Amount</div>
			</div>
			<div className="expense-list">
				<ol>
					{expenseList.map((object, index) => (
						<li className="list">
							<div>{object.description}</div>
							<div>{object.category}</div>
							<div>{object.amount}</div>
							<button>Delete</button>
						</li>
					))}
				</ol>

			</div>
			<div className="input">
				<input type="text" className="decription-input" />

				<select name="category" id="category">
					<option value="food">Food</option>\
					<option value="cloths">Cloths</option>
					<option value="transport">Transport</option>
					<option value="others">Others</option>
				</select>
				<input type="number" />
				<button>Add</button>
			</div>

		</div>
	);
}

export default ExpenseTracker