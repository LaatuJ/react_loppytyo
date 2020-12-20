import { render } from "@testing-library/react";
import { JokeView } from "../components/JokeView";

const setup = () => {
	const utils = render(<JokeView/>);
	const text = utils.getByText("Et ole vielä hakenut ollenkaan vitsejä.");
	return {
		text,
		...utils,
	}
}

test("Tarkista teksti jos ei ole haettu vitsejä", () => {
	const {text} = setup();
	expect(text).toBeInTheDocument();
});

