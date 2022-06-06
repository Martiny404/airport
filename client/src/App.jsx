import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Postspage from './pages/PostsPage/Postspage';
import Homepage from './pages/HomePage/Homepage';
import Singlepostpage from './pages/SinglePostPage/Singlepostpage';
function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' index element={<Homepage />} />
				<Route path='posts' element={<Postspage />} />
				<Route path='posts/:id' element={<Singlepostpage />} />
				<Route path='*' element={<h1>ERROR</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
