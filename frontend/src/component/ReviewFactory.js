import React from 'react';
import Review from './Review';

//author, title, content, postedAt
const ReviewFactory = ({ reviews }) => {
	return (
		<div>
			{reviews.map((review) => (
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
