export const Input = (props) => {
	const {type, onChange, value, label} = props;

	const handleOnChange = (e) => {
		if (type === "number" && (e === "" || e >= 1)) {
			onChange && onChange(e);
		} else if (type === "input") {
			onChange && onChange(e);
		}
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
				onBlur={(e) => {
					if (e.target.value < 1) {
						onChange && onChange(1);
					}
				}}
			>

			</input>
		</div>
	);
};