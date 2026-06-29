import { NavLink, Route, Routes } from 'react-router';
import ListAsteroids from './ListAsteroids';
import AddAsteroid from './AddAsteroid';
import EditAsteroid from './EditAsteroid';
import DeleteAsteroid from './DeleteAsteroid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AsteroidsContainer = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<header className="row">
				<h1>Asteroids</h1>
				<hr />
				<nav className="navbar">
					<ul className="list-inline">
						<li className="nav-item list-inline-item">
							<NavLink to="/asteroids/browse">Browse</NavLink>
						</li>
						<li className="nav-item list-inline-item">
							<NavLink to="/asteroids/add">Add</NavLink>
						</li>
						<li className="nav-item list-inline-item">
							<NavLink to="/asteroids/edit">Edit</NavLink>
						</li>
						<li className="nav-item list-inline-item">
							<NavLink to="/asteroids/delete">Delete</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<section>
				<Routes>
					<Route
						path="browse"
						element={<ListAsteroids />}
					/>
					<Route
						path="add"
						element={<AddAsteroid />}
					/>
					<Route
						path="edit"
						element={<EditAsteroid />}
					/>
					<Route
						path="delete"
						element={<DeleteAsteroid />}
					/>
				</Routes>
			</section>
		</QueryClientProvider>
	);
};
export default AsteroidsContainer;
