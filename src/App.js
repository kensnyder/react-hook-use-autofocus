import React from 'react';
import { ShoppingList } from './components/ShoppingList.js';
import { WhatIsThis } from './components/WhatIsThis.js';

export function App() {
	return (
		<section>
			<WhatIsThis />
			<ShoppingList />
		</section>
	);
}
