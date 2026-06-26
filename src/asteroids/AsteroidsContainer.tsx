import ListAsteroids from './ListAsteroids';

const AsteroidsContainer = () => {
	return (
		<>
			<header className="row">
				<h1>Asteroids</h1>
				<hr />
			</header>
			<section>
				<ListAsteroids />
			</section>
		</>
	);
};
export default AsteroidsContainer;
