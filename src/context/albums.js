import React, { useState, useEffect } from 'react';
import API from '../api';

// to avoid PROPS DRILLING in order to pass data around in our app:
// One solution is to use REACT CONTEXT which solves this problem...
// ... by allowing us to share values through the component tree to any component that asks for those values.

const userId = 1;

// Context for albums collection; exports by default - Defines a new Context
const AlbumsContext = React.createContext();
export default AlbumsContext;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all album
	// useEffect with [] (empty dependencies); works as older "componentDidMount"
	useEffect(() => {
		fetch(API.albums(userId))
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAlbums(res);
			});
	}, []);

	// In order to provide values to our child components from a parent component with REACT CONTEXT, we need to setup a PROVIDER.
	// Pass context to children components
	return (
		// a value prop to be passed to consuming components that are descendants of this Provider
		// one Provider can be connected to many consumers.
		<AlbumsContext.Provider value={{ albums, setAlbums }}>
			{/* Renders components inside */}
			{props.children}
		</AlbumsContext.Provider>
	);
};
