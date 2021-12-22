import React from 'react';

const Review = ({ author, title, content, postedAt }) => {
	return (
		<div>
			<h1>{title}</h1>
			<h2>author: {author}</h2>
			<div>{content}</div>
			{postedAt}
		</div>
	);
};

export default Review;
