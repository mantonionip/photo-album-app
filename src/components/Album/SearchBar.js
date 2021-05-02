import { Label, Input, SearchBar, ClearSearch } from '../../StyledComponents';

const Search = ({ search, setSearch }) => {
	const clearSearch = () => setSearch('');

	return (
		<>
			<SearchBar>
				{/* Input label; styled component with optional size */}
				<Label size="large" htmlFor="search-input">
					Search photo:
				</Label>

				{/* Search input; always trims input (don't allow spaces at the beginning or end) */}
				<Input
					type="text"
					aria-required="true"
					id="search-input"
					name="search"
					value={search}
					onChange={(event) => setSearch(event.target.value.trim())}
					placeholder="e.g. accusamus"
				/>

				{search && <ClearSearch onClick={clearSearch}>x</ClearSearch>}
			</SearchBar>
		</>
	);
};

export default Search;
