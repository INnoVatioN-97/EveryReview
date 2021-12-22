import React from 'react';
import Review from './Review';

//author, title, content, postedAt
const ReviewFactory = ({ reviews }) => {
	let today = new Date();
	const tmpReviews = [
		{
			author: 'james',
			title: 'this is first title',
			content: 'and this is first content',
			postedAt: `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`,
		},
		{
			author: 'mark',
			title: 'this is second title',
			content: 'and this is second content',
			postedAt: `${today.getFullYear()}/${today.getMonth()}/${today.getDate() - 1}`,
		},
		{
			author: 'jeff',
			title: 'this is third title',
			content: 'and this is third content',
			postedAt: `${today.getFullYear()}/${today.getMonth()}/${today.getDate() - 2}`,
		},
	];

	return (
		<div>
			{tmpReviews.map((review) => (
				<Review
					author={review.author}
					title={review.title}
					content={review.content}
					postedAt={review.postedAt}
				/>
			))}
		</div>
	);
	// {reviews.map((review)=>return{ <Review />})}
};

export default ReviewFactory;
