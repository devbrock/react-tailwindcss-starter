import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post(props) {
	const { id } = props.match.params;
	const [post, setPost] = useState('');

	useEffect(() => {
		axios
			.get(`http://localhost:3000/posts/${id}`)
			.then(res => setPost(res.data));
	}, [id]);

	return (
		<div className="w-9/12 my-4 mx-auto leading-loose">
			{post !== '' ? (
				<div className="bg-gray-200 rounded px-8 py-4">
					<p className="text-center text-lg font-bold underline">
						{post.title}{' '}
					</p>
					<p className="text-center text-sm font-light">
						{post.published} -{' '}
						<span className="font-bold text-blue-900">
							{post.votes}{' '}
							<span role="img" aria-label="claps">
								👏
							</span>
						</span>
					</p>
					<p className="">{post.description}</p>
					<p className="font-semibold">
						{post.owner.first_title} {post.owner.last_title}
					</p>
					<div className="flex flex-wrap flex-1 justify-between">
						<p className="text-blue-900 underline">{post.owner.email}</p>
						<a
							href={post.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-white font-bold bg-blue-900 px-4 py-2 rounded"
						>
							View Source
						</a>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}
