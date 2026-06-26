export interface Asteroid {
	name: string;
	id: string;
	mass: number;
	speed: number;
	energy: number;
	impactProbability: number;
	pHazard: number;
	tHazard: number;
	firstObserved: Date;
	lastObserved: Date;
}

export interface SentryData {
	id: string;
	mass: string;
	v_inf: string;
	ps_max: string;
	fullname: string;
	h: string;
	nsat: string;
	ip: string;
	darc: string;
	ndel: number;
	cdate: string;
	nobs: number;
	pdate: string;
	diameter: string;
	ps_cum: string;
	ndop: number;
	v_imp: string;
	ts_max: string;
	n_imp: number;
	energy: string;
	last_obs: string;
	first_obs: string;
	method: string;
	des: string;
}
