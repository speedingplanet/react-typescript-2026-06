import Greeter from './interactive-greeter/Greeter';

function App() {
	return (
		<main className="container">
			<header className="row">
				<h1>React App</h1>
				<hr />
			</header>
			<section className="row">
				<div className="col">
					<Greeter firstName="John"></Greeter>
				</div>
			</section>
		</main>
	);
}

export default App;
