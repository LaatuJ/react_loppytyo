export const Button = (props) => {
	const {
		text = "Click me!",
		onClick,
	} = props;
	return (
		<div className={"button-container"}>
			<button onClick={() => onClick()}>{text}</button>
		</div>
	);
};