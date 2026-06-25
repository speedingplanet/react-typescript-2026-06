import { useState } from 'react';
import Greeter from './interactive-greeter/Greeter';

function App() {
	const [inputFirstName, setInputFirstName] = useState('Jennifer');

	function sayHello() {
		console.log('You clicked on the button.');
		setInputFirstName('Bob');
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
								onClick={sayHello}
							>
								Change name to Bob
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col mb-2">
							<h3>Placeholder</h3>
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
