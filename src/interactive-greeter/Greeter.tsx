interface GreeterProps {
	firstName: string;
}

export default function Greeter({ firstName }: GreeterProps) {
	return <p>Hello, {firstName}</p>;
}
