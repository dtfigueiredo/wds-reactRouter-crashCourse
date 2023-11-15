import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { About } from './pages/About';

import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { BooksRouter } from './pages/routes/BooksRouter';

import { NotFound } from './pages/NotFound';
import './styles.css';

function Navigation() {
	return (
		<nav style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
			<NavLink
				end
				to='/books'>
				Books
			</NavLink>
		</nav>
	);
}

export function App() {
	const location = useLocation();

	return (
		<>
			<Navigation />

			{location.state && location.state.message}

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/books/*'
					element={<BooksRouter />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
}
