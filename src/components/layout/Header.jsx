import React from 'react';

export default function Header() {
	return (
		<div className="bg-blue-900 h-32 flex flex-col flex-wrap justify-center content-center mb-12">
			<div className="transform translate-y-8 w-full text-center">
				<h1 className="text-gray-200 font-bold text-4xl capitalize">
					<a href="/">Fake Rest Api App </a>
					<span role="img" aria-label="fire">
						🔥
					</span>
				</h1>
				<p className="bg-gray-200 px-4 py-2 rounded-full w-6/12 mx-auto mt-4 uppercase text-sm font-semibold text-blue-900">
					An application to demonstrate how to interact with RESTful API.
				</p>
			</div>
		</div>
	);
}
