export const NumInput = (props) => {
	const {type, onChange, value, label} = props;

	const handleOnChange = (e) => {
		if (type === "number" && (e === "" || e >= 1)) {
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
			>

			</input>
		</div>
	);
};