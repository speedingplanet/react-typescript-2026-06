import { useState } from 'react';

interface GreeterInputProps {
	updateName: (inputName: string) => void;
}

export default function GreeterInput({ updateName }: GreeterInputProps) {
	const [inputName, setInputName] = useState('');

	return (
		<div>
			<label
				htmlFor="input-component"
				className="form-label"
			>
				(GreeterInput) Enter your name:
			</label>
			{/* React Controlled Component */}
			<input
				type="text"
				name="inputComponent"
				id="input-component"
				className="form-control"
				onChange={(event) => setInputName(event.target.value)}
				value={inputName}
			/>
			<div className="mt-2">
				<button
					className="btn btn-success"
					onClick={() => {
						/*
						let inputField = document.querySelector('#input-component') as HTMLInputElement;
						if (inputField !== null) {
							updateName(inputField.value);
						}
							*/

						updateName(inputName);
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
}
