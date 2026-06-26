import des from './first-twenty.json' with { type: 'json' };
import { writeJsonSync } from 'fs-extra/esm';

console.log('Designations:', des);
let url = 'https://ssd-api.jpl.nasa.gov/sentry.api';

let data = [];

for (let designation of des) {
	await fetchAsteroid(designation);
}

console.log('data: ', data);
writeJsonSync('asteroids.json', { asteroids: data }, { spaces: '\t' });

async function fetchAsteroid(des) {
	let requestURL = `${url}?des=${des}`;
	console.log(`requesting ${requestURL}`);
	try {
		let response = await fetch(requestURL);
		if (response.ok) {
			let asteroid = await response.json();
			data.push({
				id: des,
				...asteroid.summary,
			});
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('Problems:', error);
	}
}
