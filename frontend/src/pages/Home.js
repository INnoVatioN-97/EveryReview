import react from 'react';
import ReviewFactory from '../component/ReviewFactory';
import SideBar from '../component/SideBar';

const Home = () => {
	// let today = new Date();
	const tmpReviews = [
		{
			author: 'james',
			title: 'this is first title',
			content: 'and this is first content',
			postedAt: `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`,
		},
		{
			author: 'mark',
			title: 'this is second title',
			content: 'and this is second content',
			postedAt: `${new Date().getFullYear()}/${new Date().getMonth()}/${
				new Date().getDate() - 1
			}`,
		},
		{
			author: 'jeff',
			title: 'this is third title',
			content: 'and this is third content',
			postedAt: `${new Date().getFullYear()}/${new Date().getMonth()}/${
				new Date().getDate() - 2
			}`,
		},
	];
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto',
				// justifyContent: 'center',
			}}>
			<h1 style={{ textAlign: 'center' }}>Evereview</h1>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<SideBar />
				<ReviewFactory reviews={tmpReviews} />
			</div>
		</div>
	);
};

export default Home;
