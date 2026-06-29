import { NavLink, Route, Routes } from 'react-router';
import { GreeterContainer } from './interactive-greeter/GreeterContainer';
import AsteroidsContainer from './asteroids/AsteroidsContainer';
import './App.css';

function App() {
	return (
		<main className="container">
			<nav className="navbar">
				<ul className="list-inline">
					<li className="nav-item list-inline-item">
						<NavLink to="/greeter">Greeter</NavLink>
					</li>
					<li className="nav-item list-inline-item">
						<NavLink to="/asteroids">Asteroids</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path="/greeter"
					element={<GreeterContainer />}
				/>
				<Route
					path="/asteroids/*"
					element={<AsteroidsContainer />}
				/>
			</Routes>
		</main>
	);
}

export default App;
