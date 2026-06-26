interface GreeterProps {
	firstName: string;
}

export default function Greeter({ firstName }: GreeterProps) {
	console.log('Greeter: render');
	return <p>Hello, {firstName}</p>;
}
