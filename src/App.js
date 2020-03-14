import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './components/Post';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route path="/" exact component={PostsList} />
				<Route path="/:id" exact component={Post} />
			</div>
		</Router>
	);
}

export default App;
