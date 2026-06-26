import { useState } from 'react';
import Greeter from './Greeter';
import GreeterInput from './GreeterInput';

export const GreeterContainer = () => {
	// const [value, setter] = useState(initialState)
	// if (lastValue !== newValue) re-render() else doNothing()
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

	function handleFormInput(event: React.ChangeEvent<HTMLInputElement>) {
		console.log(`You entered ${event.target.value}`);
		setInputFirstName(event.target.value);
	}

	function handleGreeterInput(inputName: string) {
		setInputFirstName(inputName);
	}

	console.log('GreeterContainer: render');
	return (
		<>
			<header className="row">
				<h1>Greeter</h1>
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
					<hr />
					<div className="row">
						<div className="col mb-2">
							<label
								htmlFor="dynamic-input"
								className="form-label"
							>
								Enter your name:
							</label>
							<input
								type="text"
								name="dynamicInput"
								id="dynamic-input"
								className="form-control"
								onChange={handleFormInput}
							/>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col">
							<GreeterInput callback={handleGreeterInput} />
						</div>
					</div>
				</div>
				<div className="col">
					<Greeter firstName={inputFirstName}></Greeter>
				</div>
			</section>
		</>
	);
};
