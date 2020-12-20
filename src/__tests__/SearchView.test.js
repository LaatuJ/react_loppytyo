import { render, fireEvent } from "@testing-library/react";
import { SearchView } from "../components/SearchView";

const setup = () => {
	const utils = render(<SearchView/>);
	const input = utils.getByLabelText("number");
	//console.log(input)
	return {
		input,
		...utils,
	}
}

test("Tarkista vitsien oletus määrä", () => {
	const {input} = setup();
	expect(input).toBeInTheDocument();
});

test("Tarkista minimi arvo", () => {
	const {input} = setup();
	
	fireEvent.change(input, { target: { value: 0 } })
	expect(input.value).not.toBe("0")

	fireEvent.change(input, { target: { value: 2 } })
	expect(input.value).toBe("2")

	fireEvent.change(input, { target: { value: -1 } })
	expect(input.value).not.toBe("-1")

	fireEvent.change(input, { target: { value: 100 } })
	expect(input.value).toBe("100")
})
