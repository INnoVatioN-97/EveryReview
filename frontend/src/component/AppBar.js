import React from 'react';

const AppBar = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				margin: 'auto',
				padding: '30px',
				justifyContent: 'space-around',
			}}>
			<span>김응애님</span>
			<span>내 정보</span>
			<span>내 글 보기</span>
			<span>로그아웃</span>
		</div>
	);
};

export default AppBar;
