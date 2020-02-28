import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="max-w-sm p-8 bg-gray-200 text-center mx-auto shadow-lg">
				<img src={logo} className="" alt="logo" />
				<p className="text-gray-900 font-display">
					Edit src/App.js and save to reload.
				</p>
				<a
					className="text-gray-900 underline"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</div>
		</div>
	);
}

export default App;
