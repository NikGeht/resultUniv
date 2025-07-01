import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

export function App() {
	const [count, setCount] = useState(0);

	return React.createElement('div', null,
		React.createElement('div', null,
			React.createElement('a', {
				href: 'https://react.dev',
				target: '_blank'
			},
				React.createElement('img', {
					src: reactLogo,
					className: 'logo react',
					alt: 'React logo'
				})
			)
		),
		React.createElement('h1', null, 'Vite + React'),
		React.createElement('div', {
			className: 'card'
		},
			React.createElement('button', {
				onClick: () => setCount((count) => count + 1)
			}, 'count is ' + count),
			React.createElement('p', null, 'Edit code and save to test HMR'),
			React.createElement('p', {
				className: 'read-the-docs'
			}, 'Click on the Vite and React logos to learn more'),
			React.createElement('p', null, new Date().getFullYear())
		)
	);
}

export default App;
