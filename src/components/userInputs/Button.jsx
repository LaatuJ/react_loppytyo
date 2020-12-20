export const Button = (props) => {
	const {
		text = "Click me!",
		onClick,
	} = props;
	return (
		<div>
			<button className="btn" onClick={() => onClick()}>{text}</button>
		</div>
	);
};