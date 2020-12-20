export const Dropdown = (props) => {
	const {options, onChange} = props;

	const onChangeHandler = (e) => {
		onChange(e)
	}

	return (
		<div>
			<label htmlFor="categories">Valitse kategoria: </label>
			<select id="categories" name="Kategoriat" onChange={(e) => onChangeHandler(e.target.value)}>
				{options.map((opt, i) => (
					<option key={opt+i} value={opt}>{opt}</option>
				))}
			</select>
		</div>
	);
};