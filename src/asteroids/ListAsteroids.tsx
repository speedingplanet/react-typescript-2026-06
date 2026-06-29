import AsteroidsGrid from './AsteroidsGrid';
import SortForm from './SortForm';
import { asteroids as sentryData } from '../data/asteroids.json' with { type: 'json' };
import { convertData } from './asteroid-utilities';
import type { Asteroid, SortCriteria } from './asteroid-types';
import { orderBy } from 'es-toolkit';
import { useState } from 'react';

/*
 * Use ReactQuery to fetch the list of asteroids, rather than importing them as hard-coded data.
 * - Delete or comment out the import line above that imports from data/asteroids.json
 * - Reference react-ts-demos/src/async-demos/ReactQuery.tsx, lines 15-21
 *   Invoke useQuery(), then do the following:
 * 1. If the request is still pending, show some message/spinner/whatever
 *    to indicate that.
 * 2. If the request fails, show an error message
 * 3. If the request is successful, check below:
 */

const ListAsteroids = () => {
	const [sortCriteria, setSortCriteria] = useState<SortCriteria<Asteroid>>({
		sortField: undefined,
		sortDirection: 'asc',
	});

	// TODO: Change this to use the data from the request, rather than the hard-coded data
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
