import React, { useRef } from 'react';
import { Label, Input, SearchBar, ClearSearch } from '../../StyledComponents';

const Search = ({ search, setSearch }) => {
	const searchInputRef = useRef();

	const handleClearSearch = () => {
		setSearch('');
		searchInputRef.current.focus();
	};

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
					ref={searchInputRef} // refs give us a way to access the React elements created in the render method - it create and attach a ref to input, we'd have the ability to focus it
					onChange={(event) => setSearch(event.target.value.trim())}
					placeholder="e.g. accusamus"
				/>

				{search && (
					<ClearSearch onClick={handleClearSearch}>x</ClearSearch>
				)}
			</SearchBar>
		</>
	);
};

export default Search;
