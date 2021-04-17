import { AlbumsList, Album, RouterLink } from '../../StyledComponents';

// Given a list/collection of albums, renders it
const Albums = ({ albums }) => {
	return (
		// <ul> container for albums
		<AlbumsList>
			{albums.map(({ id, title }) => (
				// Shows each album as a <li>
				<Album key={id}>
					{/* RouterLink is a react-router-dom Link styled component */}
					{/* Prevents page reloads using routing */}
					<RouterLink to={`/album/${id}`}>{title}</RouterLink>
				</Album>
			))}
		</AlbumsList>
	);
};

export default Albums;
