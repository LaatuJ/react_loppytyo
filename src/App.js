import { useState } from "react";
import "./App.css";
import { JokeView } from "./components/JokeView";
import { SearchView } from "./components/SearchView";

function App() {
	const [jokeIds, setJokeIds] = useState([]);
	const [jokes, setJokes] = useState([]);
	return (
		<div className="App">
			<div className={"side"}></div>
			<div className="container">
				<div className="title-container">
					<h1>(-: Harmaata huumorii :-)</h1>
				</div>
				<SearchView setJokes={setJokes} setJokeIds={setJokeIds} jokeIds={jokeIds}/>
				<JokeView jokes={jokes} jokeIds={jokeIds}/>
			</div>
			<div className={"side"}></div>
		</div>
	);
}

export default App;
