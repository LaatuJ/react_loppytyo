export const Input = (props) => {
	const { onChange, value, label } = props;

	const handleOnChange = (e) => {
		onChange && onChange(e);
	};
	return (
		<div>
			<label>{label}</label>
			<input
				className={"input"}
				value={value}
				onChange={(e) => {
					handleOnChange(e.target.value)
				}}
			>
			</input>
		</div>
	);
};