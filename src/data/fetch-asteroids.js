import des from './asteroid-designators.json' with { type: 'json' };
import { writeJsonSync } from 'fs-extra/esm';

let count = 20;

// process.argv[2] is the first command line argument
if (process.argv[2]) {
	count = process.argv[2];
}

let url = 'https://ssd-api.jpl.nasa.gov/sentry.api';

let data = [];

for await (const record of fetchAsteroids()) {
	data.push(record);
}

console.log('data: ', data);
writeJsonSync('asteroids.json', { asteroids: data }, { spaces: '\t' });

async function* fetchAsteroids() {
	for (let designation of des.slice(0, count)) {
		yield await fetchAsteroid(designation);
	}
}

async function fetchAsteroid(des) {
	let requestURL = `${url}?des=${des}`;
	process.stdout.write(`requesting ${requestURL}...`);
	try {
		let response = await fetch(requestURL);
		if (response.ok) {
			let asteroid = await response.json();
			console.log('complete');
			return {
				id: des,
				...asteroid.summary,
			};
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('Problems:', error);
	}
}
