import React, { useState, useEffect } from 'react';

// API endpoints
const API = {
	albums: (userId) =>
		`https://jsonplaceholder.typicode.com/users/${userId}/albums`,
	photos: (albumId) =>
		`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
};

// to avoid PROPS DRILLING in order to pass data around in our app:
// One solution is to use REACT CONTEXT which solves this problem...
// ... by allowing us to share values through the component tree to any component that asks for those values.

// Context for albums collection; exports by default
const AlbumsContext = React.createContext();
export default AlbumsContext;

// Wrapper Context Component Provider
export const AlbumsProvider = (props) => {
	// Album state
	const [albums, setAlbums] = useState([]);

	// Get all albums
	// useEffect with [] (empty dependencies); works as older "componentDidMount"
	useEffect(() => {
		fetch(API.albums(1))
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
		<AlbumsContext.Provider value={{ albums }}>
			{/* Renders components inside */}
			{props.children}
		</AlbumsContext.Provider>
	);
};

// Used for saving each requested album, avoiding unnecessary calls
const albums = {};
// Hook; not using context really
export const useAlbum = (albumId) => {
	// Album state containing album photos; default reads from memory (if previously saved)
	const [album, setAlbum] = useState(albums[albumId] || []);

	// Get album photographs
	useEffect(() => {
		// Album already saved in memory! Don't need to get it again
		if (albums[albumId]) return;

		fetch(API.photos(albumId))
			.then((res) => res.json())
			.then((album) => {
				// Updates state with album
				setAlbum(album);
				// Saves in memory to avoid multiple calls with the same request
				albums[albumId] = album;
			});
		// passing a second argument, an array [], to change the behaviour of useEffect to ensure the contents of useEffect function only run on component mounted and not on any updates.
		// the albumId in the array is DEPENDENCY VALUE
	}, [albumId]);

	return album;
};
