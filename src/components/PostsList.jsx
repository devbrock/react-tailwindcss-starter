import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function PostsList() {
	const [posts, setPosts] = useState([]);
	const [sortValue, setSortValue] = useState();
	const [searchTerm, setSearchTerm] = useState('');

	const getPosts = () => {
		axios
			.get(
				`http://localhost:3000/posts?_sort=${sortValue}&_order=asc&q=${searchTerm}`
			)
			.then(res => setPosts(res.data));
	};

	const handleSearch = e => {
		e.preventDefault();
		getPosts();
	};

	const handleSort = e => {
		setSortValue(e.target.value);

		if (e.target.value === 'title') {
			setPosts(_.sortBy(posts, ['title']));
		}
		if (e.target.value === 'author') {
			setPosts(_.sortBy(posts, ['owner.last_title']));
		}
	};

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="w-9/12 my-4 mx-auto">
			<form onSubmit={handleSearch}>
				<input
					type="text"
					className="border border-2 rounded px-4 py-2 w-full focus:outline-none"
					onChange={handleChange}
				/>
			</form>
			<div className="flex flex-wrap mt-2 justify-between">
				<span>
					<label className="text-gray-900 font-light mr-2 ">Sort By</label>
					<select
						onChange={handleSort}
						className="px-4 py-2 border border-2 h-8 focus:outline-none"
					>
						<option value="">Choose an option</option>
						<option value="title">Title</option>
						<option value="author">Author</option>
					</select>
				</span>
				<p className="text-gray-900 font-light">
					Showing {posts.length} results.
				</p>
			</div>
			<div className="mt-4">
				{posts.map(post => (
					<div
						key={post.id}
						className="w-full border border-2 px-4 py-2 mx-auto my-4 leading-relaxed"
					>
						<p className="font-bold text-lg text-blue-900">{post.title}</p>
						<p className="font-light text-sm">{post.published}</p>
						<p className="font-light">{post.description}</p>
						<p className="font-semibold">
							{post.owner.first_title} {post.owner.last_title}{' '}
						</p>
						<Link
							to={{ pathname: `/${post.id}` }}
							className="capitalize text-blue-900 underline"
						>
							read more
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
