import type { Asteroid } from './asteroid-types';

interface AsteroidGridProps {
	asteroids: Array<Asteroid>;
}

const AsteroidsGrid = ({ asteroids }: AsteroidGridProps) => {
	let dateFormatter = new Intl.DateTimeFormat().format;
	return (
		<ul>
			{asteroids.map((a) => (
				<li key={a.name}>
					Name: {a.name} | mass: {a.mass} kg | last seen: {dateFormatter(a.lastObserved)} | risk:{' '}
					{a.impactProbability}
				</li>
			))}
		</ul>
	);
};
export default AsteroidsGrid;
