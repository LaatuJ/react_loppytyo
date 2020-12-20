const baseUrl = "http://api.icndb.com/";

export const fetchJokes = async (jokeAmount = 10, firstName, lastName, category) => {
	const searchUrl = `${baseUrl}jokes/random/${jokeAmount}?${firstName ? `&firstName=${firstName}` : ""}${lastName ? `&lastName=${lastName}` : ""}${category ? `&limitTo=[${category}]` : ""}`
	const res = await fetch(searchUrl);
	const result = await res.json();
	return result.value;
}

export const fetchCategoryNames = async () => {
	const res = await fetch(`${baseUrl}/categories`);
	const result = await res.json();
	return result.value;
}
