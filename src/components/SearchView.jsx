import { Button } from "./userInputs/Button";
import { Dropdown } from "./userInputs/Dropdown";
import { Input } from "./userInputs/Input";
import { NumInput } from "./userInputs/NumInput";
import {useState, useEffect} from "react";
import { fetchCategoryNames, fetchJokes } from "../utils/fetchUtils";

export const SearchView = (props) => {
	const {setJokes, setJokeIds, jokeIds} = props;
	const [category, setCategory] = useState();
	const [categoryList, setCategoryList] = useState([])
	const [result, setResult] = useState();
	const [jokeAmount, setJokeAmount] = useState(10);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		const fetchCategorys = async () => {
			let result = await fetchCategoryNames()
			result.unshift("");
			setCategoryList(result);			
		}
		fetchCategorys();
	}, [])

	useEffect(() => {
		let returnJokes = [];
		let returnJokeIds = []
		if(result) {
			for (let i = 0; i < result.length; i++) {
				returnJokes.push(result[i].joke)
				if(jokeIds && !jokeIds.includes(result[i].id)) {
					returnJokeIds.push(result[i].id)
				}	
				
			}
			setJokes([...returnJokes])
			setJokeIds([...jokeIds, ...returnJokeIds])
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [result])

	const onClickHandler = () => {
		const fetchJokeData = async () => {
			const result = await fetchJokes(jokeAmount, firstName, lastName, category)
			setResult(result);			
		}
		fetchJokeData();
	}
	return (
		<div className="search">

			<NumInput type={"number"} onChange={setJokeAmount} value={jokeAmount} label={"Vitsien maara: "}/>
			<Input onChange={setFirstName} value={firstName} label={"Etunimi: "}/>
			<Input onChange={setLastName} value={lastName} label={"Sukunimi: "}/>
			<Dropdown options={categoryList} onChange={setCategory}/>
			<Button text={"Hae vitsejä"} onClick={() => onClickHandler()}/>

		</div>
	);
};