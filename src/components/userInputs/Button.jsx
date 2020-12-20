export const Button = (props) => {
	const {
		text = "Click me!",
		onClick,
	} = props;
	return (
		<div>
			<button onClick={() => onClick()}>{text}</button>
		</div>
	);
};