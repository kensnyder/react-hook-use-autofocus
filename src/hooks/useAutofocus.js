import { useRef, useEffect } from 'react';

/**
 * @return {Object} details
 * @property {Object} details.ref - The ref the consumer should use
 */
export function useAutofocus() {
	// all we need is a single ref that the consumer can add to an <input>
	const ref = useRef();

	// after mounting, focus the element
	useEffect(
		() => {
			ref.current.focus();
		},
		[ref],
	);

	return ref;
}
