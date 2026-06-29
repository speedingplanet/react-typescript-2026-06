/*
 * Write a function `fetchAllAsteroids`
 * You can use either async/await or Promises-style fetch
 * Fetch data from http://localhost:8001/asteroids
 * Return the data from fetchAllAsteroids (remember to use await!)
 * Export the function.
 *
 * You could test it in Node.js, by invoking the function like this
 *
 * let results = await fetchAllAsteroids();
 * console.log(results);
 *
 * And then run it from the command line with
 * node asteroids-dao.ts
 * Make sure you remove this when we move on to the next step.
 * Look at react-ts-demos/src/async-demos/countries-dao.ts for inspiration
 */

let baseUrl = 'http://localhost:8001/asteroids';

export async function fetchAllAsteroids() {
	try {
		let response = await fetch(baseUrl);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('asteroids-dao: Error:', error);
		throw error;
	}
}
