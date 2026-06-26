import type { Asteroid, SentryData } from './asteroid-types';

export function convertData(sentryData: SentryData): Asteroid {
	let asteroid: Asteroid = {
		name: sentryData.des,
		id: sentryData.id,
		mass: Number(sentryData.mass),
		speed: Number(sentryData.v_imp),
		energy: Number(sentryData.energy),
		impactProbability: Number(sentryData.ip),
		pHazard: Number(sentryData.ps_max),
		tHazard: Number(sentryData.ts_max),
		firstObserved: new Date(Date.parse(sentryData.first_obs)),
		lastObserved: new Date(Date.parse(sentryData.last_obs)),
	};

	return asteroid;
}
