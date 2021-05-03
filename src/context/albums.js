import React, { useState, useEffect, createContext } from 'react';
import API from '../api';

// to avoid PROPS DRILLING in order to pass data around in our app:
// One solution is to use REACT CONTEXT which solves this problem...
// ... by allowing us to share values through the component tree to any component that asks for those values.

const userId = 1;

// Context for albums collection; exports by default - Defines a new Context - Context is an OBJECT
// React.createContext returns an object with 2 values; Provider & Consumer
// Create React Context and make it available to other files in order to consume
const AlbumsContext = createContext();
export default AlbumsContext;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all album

	useEffect(() => {
		fetch(API.albums(userId))
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAlbums(res);
			});
		// useEffect with [] (empty dependencies); works as older "componentDidMount"
		// [] prevents useEffect from running on every render - if removed, it renders countless times
		// [] ensures that the content of our effect function only run on component mounted and not on any updates
	}, []);

	// In order to provide values to our child components from a parent component with REACT CONTEXT, we need to setup a PROVIDER.
	// Pass context to children components
	return (
		// a value prop to be passed to consuming components that are descendants of this Provider
		// We need to decide what values we want to provide to our child components - We do that with the help of a value attribute
		// The value we pass down is "albums"
		// one Provider can be connected to many consumers.
		<AlbumsContext.Provider value={{ albums }}>
			{/* Renders components inside */}
			{props.children}
		</AlbumsContext.Provider>
	);
};
