import { useState } from 'react';
import useAlbum from '../../hooks/useAlbum';
import Album from './Album';
import SearchBar from './SearchBar';
import Spinner from '../Spinner';
import { Title, NavLink, NavContainer } from '../../StyledComponents';

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
				<SearchBar search={search} setSearch={setSearch} />
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
