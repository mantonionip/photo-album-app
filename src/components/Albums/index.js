import { useContext } from 'react';
import AlbumsContext from '../../context/albums';
import { Title } from '../../StyledComponents';
import Albums from './Albums';
import Spinner from '../Spinner';

// Wrapper component for albums collection
const AlbumsContainer = (props) => {
	// Gets the context with the albums collection using React.Context and React.useContext
	const { albums } = useContext(AlbumsContext);

	return (
		<>
			<Title>Photo Galleries:</Title>

			{/* Shows spinner while albums is still loading */}
			<Spinner loading={!albums.length} />

			{/* Albums list; rendered as <ul> */}
			<Albums albums={albums} />
		</>
	);
};

export default AlbumsContainer;
