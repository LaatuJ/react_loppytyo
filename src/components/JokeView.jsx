export const JokeView = (props) => {
	const {jokeIds = [], jokes = []} = props
	return (
		<div className="joke">
			<div className={"uniikkii"}>
				<p>Uniikkeja vitsejä näytetty: {jokeIds.length}</p>
			</div>

			{jokes.length >= 1 &&
				<ul>
					{jokes.map((joke, index) => (
						<li key={joke + index}>{joke}</li>
					))}
				</ul>
			}
			{jokes.length < 1 && <p>Et ole vielä hakenut ollenkaan vitsejä.</p>}


		</div>
	);
};