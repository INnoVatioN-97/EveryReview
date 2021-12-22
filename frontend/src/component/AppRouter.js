import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Join from '../pages/Join';
import Login from '../pages/Login';

const AppRouter = () => {
	//react-router-dom이 v6으로 업데이트 되며 조금 라우팅 형태 바뀜.
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/join' element={<Join />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/about' element={<About />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
