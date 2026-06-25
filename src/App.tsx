import { useState } from 'react';
import Greeter from './interactive-greeter/Greeter';

function App() {
	// const [value, setter] = useState(initialState)
	const [inputFirstName, setInputFirstName] = useState('Jennifer');

	function handleButtonClick() {
		console.log('You clicked on the button.');
		setInputFirstName('Bob');
	}

	function handleButtonUpdate() {
		let formField = document.querySelector('#button-update') as HTMLInputElement;

		if (formField !== null) {
			setInputFirstName(formField.value);
		}
	}

	return (
		<main className="container">
			<header className="row">
				<h1>React App</h1>
				<hr />
			</header>
			<section className="row">
				{/* .col>.row*4>.col>h3{Placeholder} */}
				<div className="col">
					<div className="row">
						<div className="col mb-2">
							{/* button.btn.btn-primary */}
							<button
								className="btn btn-primary"
								onClick={handleButtonClick}
							>
								Change name to Bob
							</button>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col mb-2">
							{/* label.form-label+input:text#button-input */}
							<label
								htmlFor="button-update"
								className="form-label"
							>
								Enter your name:
							</label>
							<input
								type="text"
								name="buttonUpdate"
								id="button-update"
								className="form-control"
							/>
							<div className="mt-2">
								<button
									className="btn btn-secondary"
									onClick={handleButtonUpdate}
								>
									Update
								</button>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col mb-2">
							<h3>Placeholder</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h3>Placeholder</h3>
						</div>
					</div>
				</div>
				<div className="col">
					<Greeter firstName={inputFirstName}></Greeter>
				</div>
			</section>
		</main>
	);
}

export default App;
