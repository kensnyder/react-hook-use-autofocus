import React, { useState } from 'react';
import './WhatIsThis.css';

export function WhatIsThis() {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<div className="WhatIsThis">
			<a
				href={null}
				className="about-badge clickable"
				onClick={setExpanded.bind(0, true)}
			>
				<span className="about-icon">🧐</span>
				<span className="about-label">What is this demo about?</span>
			</a>
			{isExpanded && (
				<div className="about-text-area">
					<div className="about-text">
						<a
							href={null}
							className="about-close clickable"
							onClick={setExpanded.bind(0, false)}
						>
							&times;
						</a>
						<h3>
							This demo shows a custom useAutofocus() React hook
							that makes it super simple to focus an input as soon
							as the component is mounted.
						</h3>
						<p>
							Have a look at its definition in
							/hooks/useAutofocus.js and its use in
							/components/ShoppingItem.js
						</p>
						<h3>Tell me more about this hooks thing!</h3>
						<p>
							Hooks are an upcoming feature that lets you use
							state and other React features without writing a
							class. They’re currently in React v16.7.0-alpha.
						</p>
						<p>
							Check out the{' '}
							<a href="https://reactjs.org/docs/hooks-intro.html">
								official docs
							</a>{' '}
							and this{' '}
							<a href="https://www.youtube.com/watch?v=dpw9EHDh2bM">
								intro video
							</a>
							.
						</p>
						<p>
							The concept is not unique to React. Check out
							experiments of these React-style hooks in{' '}
							<a href="https://www.npmjs.com/package/vue-hooks">
								Vue
							</a>{' '}
							or{' '}
							<a href="https://github.com/getify/tng-hooks">
								vanilla JavaScript
							</a>
							.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
