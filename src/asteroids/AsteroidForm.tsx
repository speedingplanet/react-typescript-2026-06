// Prototype for the add and edit forms. No actual React functionality
const AsteroidForm = () => {
	return (
		<div>
			{/* .row.mb-2>label.col-2.col-form-label+.col>input:number.form-control */}
			<div className="row mb-2">
				<label
					htmlFor="asteroid-name"
					className="col-2 col-form-label"
				>
					Name:
				</label>
				<div className="col">
					<input
						type="text"
						id="asteroid-name"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="mass"
					className="col-2 col-form-label"
				>
					Mass:
				</label>
				<div className="col">
					<input
						type="number"
						name="mass"
						id="mass"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="speed"
					className="col-2 col-form-label"
				>
					Speed:
				</label>
				<div className="col">
					<input
						type="number"
						name="speed"
						id="speed"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="energy"
					className="col-2 col-form-label"
				>
					Energy:
				</label>
				<div className="col">
					<input
						type="number"
						name="energy"
						id="energy"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="impact-probability"
					className="col-2 col-form-label"
				>
					Impact Probability:
				</label>
				<div className="col">
					<input
						type="number"
						name="impactProbability"
						id="impact-probability"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="p-hazard"
					className="col-2 col-form-label"
				>
					P Hazard
				</label>
				<div className="col">
					<input
						type="number"
						name="pHazard"
						id="p-hazard"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="t-hazard"
					className="col-2 col-form-label"
				>
					T Hazard
				</label>
				<div className="col">
					<input
						type="number"
						name="tHazard"
						id="t-hazard"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="first-observed"
					className="col-2 col-form-label"
				>
					First observed:
				</label>
				<div className="col">
					<input
						type="date"
						name="firstObserved"
						id="first-observed"
						className="form-control"
					/>
				</div>
			</div>
			<div className="row mb-2">
				<label
					htmlFor="last-observed"
					className="col-2 col-form-label"
				>
					Last observed:
				</label>
				<div className="col">
					<input
						type="date"
						name="lastObserved"
						id="last-observed"
						className="form-control"
					/>
				</div>
			</div>
		</div>
	);
};
export default AsteroidForm;
