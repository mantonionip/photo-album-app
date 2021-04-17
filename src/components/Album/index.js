import { useState } from 'react';
import { useAlbum } from '../../context/albums';
import Album from './Album';
import Spinner from '../Spinner';
import {
	Title,
	Label,
	Input,
	NavLink,
	NavContainer,
	SearchBar,
} from '../../StyledComponents';

const AlbumContainer = (props) => {
	// Search input state
	const [search, setSearch] = useState('');

	// Gets album id from URL; match object is provided by React Router
	const { albumId } = props.match.params;

	// Gets album (array of photos) by using the custom useAlbum hook
	const album = useAlbum(albumId);

	return (
		<>
			<Title>And your favorite photo is...</Title>

			<NavContainer>
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
						onChange={(event) =>
							setSearch(event.target.value.trim())
						}
						placeholder="e.g. accusamus"
					/>
				</SearchBar>

				<NavLink to="/">Back to Main Page</NavLink>
			</NavContainer>

			{/* Show spinner/loader while album is still loading */}
			<Spinner loading={!album.length} />

			{/* Album list */}
			<Album album={album} search={search} />
		</>
	);
};

export default AlbumContainer;
