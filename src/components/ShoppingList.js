import React, { useState } from 'react';
import { ShoppingItem } from './ShoppingItem.js';

export function ShoppingList() {
	const startingItems = [{ text: 'Eggs', completed: false }];
	const [items, setItems] = useState(startingItems);

	return (
		<div className="ShoppingList">
			<h2>Shopping List</h2>
			<form onSubmit={handleEnter}>
				{items.map((item, i) => (
					<ShoppingItem
						key={i}
						item={item}
						setItem={setItem.bind(0, i)}
					/>
				))}
				<button onClick={addNew}>Add New...</button>
			</form>
		</div>
	);

	function setItem(idx, newItem) {
		setItems(items => {
			const newItems = [...items];
			newItems[idx] = newItem;
			return newItems;
		});
	}

	function addNew() {
		setItems(items => {
			return [...items, { text: '', completed: false }];
		});
	}

	function handleEnter(evt) {
		evt.preventDefault();
	}
}
