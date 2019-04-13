import React from 'react';
import { useAutofocus } from '../hooks/useAutofocus.js';

export function ShoppingItem({ item, setItem }) {
	return (
		<p className="ShoppingItem Component">
			<input
				type="text"
				value={item.text}
				onChange={changeItemText}
				ref={useAutofocus()}
			/>
			<label>
				<input
					type="checkbox"
					checked={item.completed}
					onChange={changeCompleted}
				/>
				<span className="checkable" />
			</label>
		</p>
	);

	function changeItemText(evt) {
		const text = evt.target.value;
		setItem({ ...item, text });
	}

	function changeCompleted() {
		const completed = !item.completed;
		setItem({ ...item, completed });
	}
}
