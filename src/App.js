import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<h1 className="text-5xl text-blue-900 mt-16 font-bold text-center">
					🔥 Hello from React + TailwindCSS 🔥{' '}
				</h1>
			</div>
		</Router>
	);
}

export default App;
