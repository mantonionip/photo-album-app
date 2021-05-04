import { useContext } from 'react';
import AlbumsContext from '../../context/AlbumsContext';
import { Title } from '../../StyledComponents';
import Albums from './Albums';
import Spinner from '../Spinner';

// Wrapper component for albums collection
const AlbumsContainer = (props) => {
	// useContext allows us to consume a context.
	// import useContext and pass in a particular CONTEXT (here AlbumsContext)
	// What's nice about useContext is that we can use it more than once in a given component
	// Also make sure that we need to pass in the entire CONTEXT not just CONSUMER not just PROVIDER
	// +++ So to CONSUME a Context using useContext, it's really simple;
	// You import the ENTIRE CONTEXT, pass it in and then REACT is gonna look up to try and find the nearest PROVIDER if there is a provider.
	// In our case there is a provider --> it's AlbumsProvider
	// And inside of AlbumsProvider we can see that we have value where we're passing in {{albums}}
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
