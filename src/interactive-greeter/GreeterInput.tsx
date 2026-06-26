interface GreeterInputProps {
	callback: (inputName: string) => void;
}

export default function GreeterInput({ callback }: GreeterInputProps) {
	return (
		<div>
			<label
				htmlFor="input-component"
				className="form-label"
			>
				(GreeterInput) Enter your name:
			</label>
			<input
				type="text"
				name="inputComponent"
				id="input-component"
				className="form-control"
			/>
			<div className="mt-2">
				<button
					className="btn btn-success"
					onClick={() => {
						let inputField = document.querySelector('#input-component') as HTMLInputElement;
						if (inputField !== null) {
							callback(inputField.value);
						}
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
}
