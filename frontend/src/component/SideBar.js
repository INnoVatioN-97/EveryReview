import React from 'react';

const SideBar = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				// padding: '20px',
				// justifyContent: 'space-between',
				marginLeft: '3%',
				marginRight: '2%',
			}}>
			<span>리뷰 목록</span>
			<span>리뷰 작성</span>
			{/* <span>김응애님</span>
			<span>김응애님</span> */}
		</div>
	);
};

export default SideBar;
