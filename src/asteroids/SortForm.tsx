import type { Asteroid, SortCriteria, SortDirection } from './asteroid-types';

interface SortFormProps<T> {
	updateSort: (sortCriteria: SortCriteria<T>) => void;
	sortCriteria: SortCriteria<T>;
}

const SortForm = ({ updateSort, sortCriteria }: SortFormProps<Asteroid>) => {
	function handleToggleRadioButton(event: React.ChangeEvent<HTMLInputElement>) {
		let sortDirection: SortDirection;
		if (event.target.checked) {
			if (event.target.value === 'asc') {
				sortDirection = 'asc';
			} else {
				sortDirection = 'desc';
			}
		}

		updateSortCriteria({ sortDirection });
	}

	function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
		// Effectively, cannot choose the blank option
		if (event.target.value !== '') {
			updateSortCriteria({ sortField: event.target.value as keyof Asteroid });
		}
	}

	/**
	 * Merges state updates with existing sort criteria
	 * Calls both state setter, and event handler
	 */
	function updateSortCriteria(updatedSortCriteria: Partial<SortCriteria<Asteroid>>) {
		let nextSortCriteria = { ...sortCriteria, ...updatedSortCriteria };
		// setSortCriteria(nextSortCriteria);
		updateSort(nextSortCriteria);
	}

	return (
		<>
			<div>
				<select
					name="sortField"
					id="sort-field"
					className="form-select"
					onChange={handleChangeSelect}
				>
					<option value="">Choose a field to sort on</option>
					<option value="name">Name</option>
					<option value="mass">Mass</option>
					<option value="lastObserved">Last Observed</option>
					<option value="impactProbability">Hazard</option>
				</select>
			</div>
			<div>
				<span>Choose a direction to sort: </span>
				<div className="form-check form-check-inline mt-2">
					<input
						type="radio"
						name="sortDirection"
						id="sort-direction-asc"
						className="form-check-input"
						value="asc"
						onChange={handleToggleRadioButton}
						defaultChecked
					/>
					<label
						htmlFor="sort-direction-asc"
						className="form-check-label"
					>
						Ascending
					</label>
				</div>
				<div className="form-check form-check-inline ">
					<input
						type="radio"
						name="sortDirection"
						id="sort-direction-desc"
						className="form-check-input"
						value="desc"
						onChange={handleToggleRadioButton}
					/>
					<label
						htmlFor="sort-direction-desc"
						className="form-check-label"
					>
						Descending
					</label>
				</div>
			</div>
		</>
	);
};
export default SortForm;
