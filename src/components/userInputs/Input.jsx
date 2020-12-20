export const Input = (props) => {
	const {type, onChange, value, label} = props;

	const handleOnChange = (e) => {
		onChange && onChange(e);
	};
	return (
		<div>
			<label>{label}</label>
			<input
				aria-label={type}
				className={"input"}
				type={type}
				value={value}
				onChange={(e) => {
					handleOnChange(e.target.value)
				}}
			>

			</input>
		</div>
	);
};