import AsteroidsGrid from './AsteroidsGrid';
import SortForm from './SortForm';
import { asteroids as sentryData } from '../data/asteroids.json' with { type: 'json' };
import { convertData } from './asteroid-utilities';
import type { Asteroid, SortCriteria } from './asteroid-types';
import { orderBy } from 'es-toolkit';
import { useState } from 'react';

const ListAsteroids = () => {
	const [sortCriteria, setSortCriteria] = useState<SortCriteria<Asteroid>>({
		sortField: undefined,
		sortDirection: undefined,
	});

	let asteroids: Array<Asteroid> = sentryData.map((sd) => convertData(sd));

	if (sortCriteria.sortDirection !== undefined) {
		asteroids = orderBy(asteroids, [sortCriteria.sortField!], [sortCriteria.sortDirection]);
	}

	function handleUpdateSort(sortCriteria: SortCriteria<Asteroid>) {
		setSortCriteria(sortCriteria);
	}

	return (
		<>
			<div className="mb-2">
				<SortForm
					updateSort={handleUpdateSort}
					sortCriteria={sortCriteria}
				/>
			</div>
			<AsteroidsGrid asteroids={asteroids} />
		</>
	);
};
export default ListAsteroids;
